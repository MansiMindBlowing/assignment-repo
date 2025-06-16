import Comments from "./Comments"
import Header from "./Header"
import MainContent from "./MainContent"
import "../style/Blog.css"

function BlogComp(){

    const post = {
        title : "React Practice Assignmnt",
        author : "mansi",
        date: "June 15, 2025",
        content:["JavaScript is a single-threaded language, but thanks to the event loop, it can handle asynchronous operations efficiently. The event loop constantly checks the call stack and the task queue. If the call stack is empty, it pushes the next task from the queue into the stack for execution. This enables non-blocking behavior and is especially crucial in Node.js environments.",
                 "Tired of boring lunchboxes? Try this quick and protein-rich egg bhurji. Just crack a few eggs, sauté onions, tomatoes, and green chilies, and you're done! Pair it with roti or even bread – it’s the perfect meal for a busy weekday."
        ],
        comment:[ { id: 1, user: "Aditi", text: "Great post!" },
                  { id: 2, user: "Rohan", text: "Really helpful, thanks!" },
                  { id: 3, user: "Neha", text: "Nice explanation." }]
                        };

    return(
        <div className="blogStyle">
            <Header title = {post.title} author={post.author} date = {post.date}/>
            {/* <MainContent content={post.content}/> */}
           <MainContent content={post.content} comment={post.comment}/>


        </div>
    )
}

export default BlogComp