import { Link } from "react-router-dom"

function CourseCards() {

    let topics = [
        {tid:1, title:"What is Spring AI?", detailes:"Spring AI helps developers integrate AI capabilities into Java applications.", image:"https://community.nasscom.in/sites/default/files/styles/home_featured_events_860_x_540/public/media/images/learn%20ai.jpg.webp?itok=GcV17bF5", link:"springai"},
        {tid:2, title:"What is Java?", detailes:"Java is a high-level, object-oriented programming language.", image:"https://miro.medium.com/v2/resize:fit:750/format:webp/1*7xkM1JlEpfTCWIgmDPSSuA.jpeg", link:"java"},
        {tid:3, title:"What is SQL?", detailes:"SQL is a language used to communicate with a relational database and perform operations.", image:"https://img.magnific.com/free-vector/gradient-sql-illustration_23-2149247491.jpg?semt=ais_hybrid&w=740&q=80", link:"sql"},
        {tid:4, title:"What is Hibernate?", detailes:"day7 topic for react", image:"https://repository-images.githubusercontent.com/760060117/ec23b31c-bc6a-4709-bd9d-7801d10815f8", link:"hibernate"},
        {tid:5, title:"What is Spring?", detailes:"day5 topic for react", image:"https://techieblaze.com/wp-content/uploads/2024/12/Spring-Framework-Version-min.jpg", link:"spring"},
        {tid:6, title:"What is SpringBoot?", detailes:"day6 topic for react", image:"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*o5FmjKTPdJTbhGE2MIjo6w.jpeg", link:"springboot"},
        {tid:7, title:"What is REST API?", detailes:"day7 topic for react", image:"https://azulschool.net/wp-content/uploads/2024/04/API-REST-API-WEB-1.jpg", link:"restapi"},
        {tid:8, title:"What is React Js?", detailes:"day8 topic for react", image:"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*x0d41ns8PTQZz4a3VbMrBg.png", link:"react"}
    ]

    return (
    <div>
        {/* <h2>React Notes</h2> */}
        <div className="row row-cols-1 row-cols-md-4 g-4 w-100" style={{margin:"auto"}}>
        {
            topics.map((t,i) => 
        <div className="col" key={i}>
            <div className="card h-100">
                <img src={t.image} className="card-img-top" alt="..." style={{height:"200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{t.title}</h5>
                            <p className="card-text">{t.detailes}</p>
                            <Link className="btn btn-primary w-100" to={t.link}>Read now...</Link>
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