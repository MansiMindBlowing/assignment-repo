import Header from "./Header";
import Skill from "./Skill";
import BioSection from "./BioSection";

function ProfileCard({name="NA", title="NA"}){
    const lists= ["java", "Python", "react"];
    return(
        <div>
            <Header name={name} title = {title} avatar="creator"/>
            <Skill list = {lists}/>
            <BioSection description = "react developer"/>
            
        </div>
    )
}

export default ProfileCard; 