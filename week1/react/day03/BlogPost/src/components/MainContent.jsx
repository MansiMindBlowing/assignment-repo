import '../style/Content.css'
import download from "../pictures/download.png"
import { useState } from 'react'

import CommentSection from './CommentSection';


function MainContent(props){
    const [commentOn, setCommentOn]= useState(false)
   
    function handleComment(){
       setCommentOn(true)
      return( <div>{commentOn}</div>)
    }
    return(<>
     <div className='para'>
            <p>{props.content[0]}</p>
            <img src={download} alt="image" />
            
        </div>

        
            <div>
                    {/* <input 
                        type="text" 
                        placeholder="Write a comment..." 
                        className="comment-input" /> */}
                    <button onClick={handleComment}> displY COMMENT</button>
            </div>

            <div>
                {commentOn === true ? <CommentSection comment={props.comment} /> : ""}

                
            </div>
    </>
       
    )
}

export default MainContent;