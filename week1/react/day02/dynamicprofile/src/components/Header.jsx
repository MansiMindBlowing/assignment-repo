import '../style/Header.css';

function Header(props){
    return (
        <div className="header-container">  

        <div style={{display:"flex", height:"100px", width:"100px"}}>
            <h3 className='header-card h3'>The name is {props.name}</h3>
            <h3 className='header-card h3'>The title is {props.title}</h3>
            <h3 className='header-card h3'>The avatar is {props.avatar}</h3>
        </div>
            
        </div>
    )
}

export default Header