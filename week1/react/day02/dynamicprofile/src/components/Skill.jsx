function Skill(props){
    console.log(props);
    return(
        <div>
            <h3>The candidate has following skills {props.list}</h3>
             <ul>
                {props.list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Skill;
