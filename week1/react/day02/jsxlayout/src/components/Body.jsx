import SideBar from "./SideBar";
import Cards from "./Cards";
function Body(){
    return (
        <div style={{backgroundColor:"gray", display:"flex"}}>
            <SideBar/>
            <Cards/>

        </div>
    )
}
export default Body;