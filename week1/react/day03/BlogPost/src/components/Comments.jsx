import CommentSection from "./CommentSection";
function Comments(props){
    return(
        <div style={{marginBottom: "10px", padding: "8px", border: "1px solid #ddd", borderRadius: "5px"}}>
            {props.user}
            {props.text}
        </div>
    )
}

export default Comments;