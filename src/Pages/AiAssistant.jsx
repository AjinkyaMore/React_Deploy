import { useState } from "react";
import "../CSS/AiAssistant.css";

function AiAssistant() {

    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [isThinking, setIsThinking] = useState(false);


    const suggestions = [
        "What is Map?",
        "What is HashMap?",
        "ArrayList vs LinkedList",
        "What is Stream API?",
        "What is method overloading?"
    ];


    // =====================================
    // Suggestion Button
    // =====================================

    const handleSuggestionClick = (suggestion) => {

        handleAskQuestion(suggestion);
    };


    // =====================================
    // Ask Question
    // =====================================

    const handleAskQuestion = (text = question) => {

        if (!text.trim() || isThinking) {
            return;
        }


        // Add user question
        const userMessage = {
            type: "user",
            text: text
        };


        setMessages((previousMessages) => [
            ...previousMessages,
            userMessage
        ]);


        setQuestion("");

        setIsThinking(true);


        // =====================================
        // Temporary Mock Response
        // Gemini API will be added later
        // =====================================

        setTimeout(() => {

            const aiMessage = {
                type: "ai",
                text: getSampleResponse(text)
            };


            setMessages((previousMessages) => [
                ...previousMessages,
                aiMessage
            ]);


            setIsThinking(false);

        }, 1500);
    };


    // =====================================
    // Temporary Sample Response
    // =====================================

    const getSampleResponse = (question) => {

        if (
            question
                .toLowerCase()
                .includes("what is map")
        ) {

            return (
                <>
                    <h5>What is Map in Java?</h5>

                    <p>
                        A <strong>Map</strong> in Java is an interface
                        used to store data in the form of
                        <strong> key-value pairs</strong>.
                    </p>

                    <p>
                        Each key in a Map must be unique.
                        However, multiple keys can have the same value.
                    </p>


                    <h6>Example</h6>

                    <pre>
{`Map<String, Integer> marks = new HashMap<>();

marks.put("Java", 90);
marks.put("SQL", 85);
marks.put("React", 80);`}
                    </pre>


                    <p>
                        In the above example:
                    </p>

                    <ul>
                        <li>
                            <code>"Java"</code> is the key.
                        </li>

                        <li>
                            <code>90</code> is the value.
                        </li>

                        <li>
                            <code>"SQL"</code> is another key.
                        </li>

                        <li>
                            Each key must be unique.
                        </li>
                    </ul>


                    <h6>Common Map Implementations</h6>

                    <ul className="mb-0">
                        <li>HashMap</li>
                        <li>LinkedHashMap</li>
                        <li>TreeMap</li>
                        <li>Hashtable</li>
                    </ul>
                </>
            );
        }


        return (
            <>
                <h5>Java AI Assistant</h5>

                <p>
                    This is a temporary sample response for:
                </p>

                <p>
                    <strong>{question}</strong>
                </p>

                <p className="mb-0">
                    Gemini API integration will be added later.
                </p>
            </>
        );
    };


    return (

        <div className="java-ai-page">

            <div className="container">

                {/* =====================================
                    Header
                ===================================== */}

                <div className="java-ai-header text-center">

                    <div className="ai-icon">
                        🤖
                    </div>

                    <h1>
                        Java AI Assistant
                    </h1>

                    <p>
                        Ask questions about Java and get simple,
                        beginner-friendly explanations.
                    </p>

                </div>


                {/* =====================================
                    Chat Container
                ===================================== */}

                <div className="java-ai-chat-container">


                    {/* =================================
                        Chat Messages
                    ================================= */}

                    <div className="java-ai-messages">


                        {/* Welcome Screen */}

                        {messages.length === 0 && !isThinking && (

                            <div className="java-ai-welcome text-center">

                                <h4>
                                    How can I help you with Java?
                                </h4>

                                <p>
                                    Ask a Java question or choose one
                                    of the suggestions below.
                                </p>

                            </div>

                        )}


                        {/* Messages */}

                        {messages.map((message, index) => (

                            <div
                                key={index}
                                className={`message-row ${
                                    message.type === "user"
                                        ? "user-row"
                                        : "ai-row"
                                }`}
                            >

                                <div
                                    className={`message ${
                                        message.type === "user"
                                            ? "user-message"
                                            : "ai-message"
                                    }`}
                                >

                                    <div className="message-label">

                                        {message.type === "user"
                                            ? "You"
                                            : "🤖 Java AI"
                                        }

                                    </div>


                                    <div className="message-content">

                                        {message.text}

                                    </div>

                                </div>

                            </div>

                        ))}


                        {/* Thinking */}

                        {isThinking && (

                            <div className="message-row ai-row">

                                <div className="message ai-message">

                                    <div className="message-label">
                                        🤖 Java AI
                                    </div>

                                    <div className="thinking">

                                        <span></span>
                                        <span></span>
                                        <span></span>

                                        <span className="thinking-text">
                                            Thinking...
                                        </span>

                                    </div>

                                </div>

                            </div>

                        )}

                    </div>


                    {/* =================================
                        Suggestions
                    ================================= */}

                    <div className="suggestions-section">

                        <div className="suggestions-title">
                            Try asking
                        </div>


                        <div className="suggestion-buttons">

                            {suggestions.map(
                                (suggestion, index) => (

                                    <button
                                        key={index}
                                        type="button"
                                        className="suggestion-btn"
                                        onClick={() =>
                                            handleSuggestionClick(
                                                suggestion
                                            )
                                        }
                                        disabled={isThinking}
                                    >
                                        {suggestion}
                                    </button>

                                )
                            )}

                        </div>

                    </div>


                    {/* =================================
                        Question Input
                    ================================= */}

                    <div className="question-box">

                        <textarea
                            className="form-control"
                            rows="2"
                            placeholder="Ask a Java question..."
                            value={question}
                            onChange={(event) =>
                                setQuestion(event.target.value)
                            }
                            onKeyDown={(event) => {

                                if (
                                    event.key === "Enter" &&
                                    !event.shiftKey
                                ) {

                                    event.preventDefault();

                                    handleAskQuestion();
                                }

                            }}
                        />


                        <button
                            type="button"
                            className="btn btn-primary send-btn"
                            onClick={() =>
                                handleAskQuestion()
                            }
                            disabled={
                                !question.trim() ||
                                isThinking
                            }
                        >

                            {isThinking
                                ? "Thinking..."
                                : "Ask"
                            }

                        </button>

                    </div>


                    {/* Input Help */}

                    <div className="input-help">

                        Press Enter to ask • Shift + Enter for a new line

                    </div>

                </div>


                {/* =====================================
                    Footer
                ===================================== */}

                <div className="ai-disclaimer text-center">

                    Java AI Assistant is designed for educational purposes.

                </div>

            </div>

        </div>
    );
}

export default AiAssistant;