import { useEffect, useState } from "react";

function Videos() {

  // =====================================================
  // YOUTUBE API CONFIGURATION
  // =====================================================

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
  const MAX_RESULTS = 12;

  // =====================================================
  // STATE
  // =====================================================

  const [videos, setVideos] = useState([]);

  const [channel, setChannel] = useState({
    name: "",
    subscribers: 0,
  });

  const [nextPageToken, setNextPageToken] = useState("");

  const [loading, setLoading] = useState(true);

  const [loadingMore, setLoadingMore] = useState(false);

  const [error, setError] = useState("");

  // =====================================================
  // FORMAT NUMBERS
  // =====================================================

  const formatNumber = (number) => {
    if (number === undefined || number === null) {
      return "0";
    }

    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(number);
  };

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (date) => {
    const publishedDate = new Date(date);
    const now = new Date();

    const difference =
      now.getTime() - publishedDate.getTime();

    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    if (days < 1) {
      return "Today";
    }

    if (days < 7) {
      return `${days} days ago`;
    }

    if (days < 30) {
      const weeks = Math.floor(days / 7);
      return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    }

    if (days < 365) {
      const months = Math.floor(days / 30);
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    }

    const years = Math.floor(days / 365);

    return `${years} ${years === 1 ? "year" : "years"} ago`;
  };

  // =====================================================
  // GET CHANNEL INFORMATION
  // =====================================================

  const fetchChannel = async () => {

    const url =
      `https://www.googleapis.com/youtube/v3/channels` +
      `?part=snippet,statistics` +
      `&id=${CHANNEL_ID}` +
      `&key=${API_KEY}`;

    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {

      throw new Error(
        data?.error?.message ||
        "Failed to fetch channel information."
      );
    }

    if (!data.items || data.items.length === 0) {

      throw new Error(
        "Channel not found. Please check your Channel ID."
      );
    }

    const channelData = data.items[0];

    setChannel({
      name: channelData.snippet.title,

      subscribers:
        channelData.statistics.subscriberCount || 0,
    });
  };

  // =====================================================
  // GET VIDEOS
  // =====================================================

  const fetchVideos = async (pageToken = "", isLoadMore = false) => {

    try {

      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      setError("");

      // -------------------------------------------------
      // STEP 1: Get video IDs + basic information
      // -------------------------------------------------

      let searchUrl =
        `https://www.googleapis.com/youtube/v3/search` +
        `?part=snippet` +
        `&channelId=${CHANNEL_ID}` +
        `&maxResults=${MAX_RESULTS}` +
        `&order=date` +
        `&type=video` +
        `&key=${API_KEY}`;

      if (pageToken) {
        searchUrl += `&pageToken=${pageToken}`;
      }

      const searchResponse = await fetch(searchUrl);

      const searchData = await searchResponse.json();

      if (!searchResponse.ok) {

        throw new Error(
          searchData?.error?.message ||
          "Failed to fetch YouTube videos."
        );
      }

      // -------------------------------------------------
      // Get video IDs
      // -------------------------------------------------

      const videoIds = searchData.items
        .map((item) => item.id.videoId)
        .filter(Boolean)
        .join(",");

      if (!videoIds) {

        if (!isLoadMore) {
          setVideos([]);
        }

        return;
      }

      // -------------------------------------------------
      // STEP 2: Get video statistics
      // -------------------------------------------------

      const videosUrl =
        `https://www.googleapis.com/youtube/v3/videos` +
        `?part=statistics` +
        `&id=${videoIds}` +
        `&key=${API_KEY}`;

      const videosResponse = await fetch(videosUrl);

      const videosData = await videosResponse.json();

      if (!videosResponse.ok) {

        throw new Error(
          videosData?.error?.message ||
          "Failed to fetch video statistics."
        );
      }

      // -------------------------------------------------
      // Create statistics lookup
      // -------------------------------------------------

      const statisticsMap = {};

      videosData.items.forEach((item) => {

        statisticsMap[item.id] = item.statistics;

      });

      // -------------------------------------------------
      // STEP 3: Combine video information
      // -------------------------------------------------

      const formattedVideos = searchData.items.map((item) => {

        const videoId = item.id.videoId;

        const statistics =
          statisticsMap[videoId] || {};

        return {

          id: videoId,

          title: item.snippet.title,

          thumbnail:
            item.snippet.thumbnails.high?.url ||
            item.snippet.thumbnails.medium?.url ||
            item.snippet.thumbnails.default?.url,

          publishedAt: item.snippet.publishedAt,

          views:
            statistics.viewCount || 0,

          likes:
            statistics.likeCount || 0,

        };

      });

      // -------------------------------------------------
      // Add videos to existing videos
      // -------------------------------------------------

      if (isLoadMore) {

        setVideos((previousVideos) => [
          ...previousVideos,
          ...formattedVideos,
        ]);

      } else {

        setVideos(formattedVideos);

      }

      // -------------------------------------------------
      // Save next page token
      // -------------------------------------------------

      setNextPageToken(
        searchData.nextPageToken || ""
      );

    } catch (err) {

      console.error(
        "YouTube API Error:",
        err
      );

      setError(err.message);

    } finally {

      setLoading(false);

      setLoadingMore(false);
    }
  };

  // =====================================================
  // INITIAL LOAD
  // =====================================================

useEffect(() => {

  const loadData = async () => {

    try {

      if (!API_KEY) {
        throw new Error(
          "YouTube API key is missing. Check your .env file."
        );
      }

      if (!CHANNEL_ID) {
        throw new Error(
          "YouTube Channel ID is missing. Check your .env file."
        );
      }

      await fetchChannel();
      await fetchVideos();

    } catch (err) {

      console.error(err);

      setError(err.message);
      setLoading(false);

    }

  };

  loadData();

}, []);


  // =====================================================
  // LOAD MORE
  // =====================================================

  const handleLoadMore = () => {

    if (!nextPageToken || loadingMore) {
      return;
    }

    fetchVideos(
      nextPageToken,
      true
    );
  };

  // =====================================================
  // LOADING SCREEN
  // =====================================================

  if (loading) {

    return (
      <div className="container py-5 text-center">

        <div
          className="spinner-border text-primary"
          role="status"
        >
          <span className="visually-hidden">
            Loading...
          </span>
        </div>

        <p className="mt-3">
          Loading videos...
        </p>

      </div>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error) {

    return (
      <div className="container py-5">

        <div
          className="alert alert-danger"
          role="alert"
        >

          <h5 className="alert-heading">
            YouTube API Error
          </h5>

          <p className="mb-0">
            {error}
          </p>

        </div>

      </div>
    );
  }

  // =====================================================
  // MAIN UI
  // =====================================================

  return (
    <div className="container-fluid py-4">

      {/* ================================================
          CHANNEL HEADER
      ================================================= */}

      <div className="mb-4">

        <h2 className="fw-bold mb-1">
          {channel.name}
        </h2>

        <p className="text-muted mb-0">
          {formatNumber(channel.subscribers)} subscribers
        </p>

      </div>


      {/* ================================================
          VIDEO GRID
      ================================================= */}

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

        {videos.map((video) => (

          <div
            className="col"
            key={video.id}
          >

            <div className="card h-100 border-0 shadow-sm">

              {/* ------------------------------------------
                  THUMBNAIL
              ------------------------------------------- */}

              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >

                <img
                  src={video.thumbnail}
                  className="card-img-top"
                  alt={video.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

              </a>


              {/* ------------------------------------------
                  CARD BODY
              ------------------------------------------- */}

              <div className="card-body d-flex flex-column">

                {/* Title */}

                <h5
                  className="card-title fw-semibold"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "48px",
                  }}
                  title={video.title}
                >
                  {video.title}
                </h5>


                {/* Channel */}

                <p className="small text-muted mb-2">

                  {channel.name}

                </p>


                {/* Statistics */}

                <div className="small text-secondary mb-3">

                  <span>
                    {formatNumber(video.views)} views
                  </span>

                  <span className="mx-2">
                    •
                  </span>

                  <span>
                    {formatNumber(video.likes)} likes
                  </span>

                  <span className="mx-2">
                    •
                  </span>

                  <span>
                    {formatDate(video.publishedAt)}
                  </span>

                </div>


                {/* Watch Button */}

                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-100 mt-auto"
                >
                  Watch Video
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* ================================================
          NO VIDEOS
      ================================================= */}

      {videos.length === 0 && (

        <div className="text-center py-5">

          <h5>
            No videos found.
          </h5>

        </div>

      )}


      {/* ================================================
          LOAD MORE BUTTON
      ================================================= */}

      {videos.length > 0 && nextPageToken && (

        <div className="text-center mt-5">

          <button
            type="button"
            className="btn btn-primary px-5"
            onClick={handleLoadMore}
            disabled={loadingMore}
          >

            {loadingMore ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                />

                Loading...
              </>
            ) : (
              "Load More"
            )}

          </button>

        </div>

      )}

    </div>
  );
}

export default Videos;
