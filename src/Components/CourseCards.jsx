import { Link } from "react-router-dom"

function CourseCards() {

    let topics = [
        {tid:1, title:"Day1", detailes:"day1 topic for react", image:"https://media.licdn.com/dms/image/v2/C4E12AQFdVr18zUa17Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624637761724?e=2147483647&v=beta&t=uOrqjZV7ZeSvE6euFcZVEuj-2yuec1FppjnE6IUYdzY", link:"reactday1"},
        {tid:2, title:"Day2", detailes:"day2 topic for react", image:"https://media.licdn.com/dms/image/v2/C4E12AQFdVr18zUa17Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624637761724?e=2147483647&v=beta&t=uOrqjZV7ZeSvE6euFcZVEuj-2yuec1FppjnE6IUYdzY", link:"reactday2"},
        {tid:3, title:"Day3", detailes:"day3 topic for react", image:"https://media.licdn.com/dms/image/v2/C4E12AQFdVr18zUa17Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624637761724?e=2147483647&v=beta&t=uOrqjZV7ZeSvE6euFcZVEuj-2yuec1FppjnE6IUYdzY", link:"reactday3"},
        {tid:4, title:"Day4", detailes:"day7 topic for react", image:"https://media.licdn.com/dms/image/v2/C4E12AQFdVr18zUa17Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624637761724?e=2147483647&v=beta&t=uOrqjZV7ZeSvE6euFcZVEuj-2yuec1FppjnE6IUYdzY", link:"reactday4"},
        {tid:5, title:"Day5", detailes:"day5 topic for react", image:"https://media.licdn.com/dms/image/v2/C4E12AQFdVr18zUa17Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624637761724?e=2147483647&v=beta&t=uOrqjZV7ZeSvE6euFcZVEuj-2yuec1FppjnE6IUYdzY", link:"reactday5"},
        {tid:6, title:"Day6", detailes:"day6 topic for react", image:"https://media.licdn.com/dms/image/v2/C4E12AQFdVr18zUa17Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624637761724?e=2147483647&v=beta&t=uOrqjZV7ZeSvE6euFcZVEuj-2yuec1FppjnE6IUYdzY", link:"reactday6"}
    ].sort((t1,t2)=> t2.tid-t1.tid);

    return (
    <div>
        {/* <h2>React Notes</h2> */}
        <div className="row row-cols-1 row-cols-md-3 g-4 w-100" style={{margin:"auto"}}>
        {
            topics.map((t) => 
        <div className="col">
            <div className="card h-100">
                <img src={t.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{t.title}</h5>
                            <p className="card-text">{t.detailes}</p>
                            <Link className="btn btn-primary w-100" to={'reactday1'}>Read now...</Link>
                    </div>
            </div>
        </div>
            )
        }
        </div>
    </div>
  )
}

export default CourseCards