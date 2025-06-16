import Comments from "./Comments";

function CommentSection(props){
    return(
        <div>
            <h3>Comments</h3>
            {props.comment.map(comment =>(
                <Comments key={comment.id} user={comment.user} text={comment.text}/>
            ))}
        </div>
    )

}

export default CommentSection;