import '../style/HeadStyle.css'
function Header(props){
    return(
        <div className='head'> 
                <div className='title'>

                    <h3>the title is {props.title}</h3>
                    <h3>Name of author is {props.author}</h3>
                    <h3>The date is {props.date}</h3>
                    
                </div>
                
               
        </div>
    )
}

export default Header;