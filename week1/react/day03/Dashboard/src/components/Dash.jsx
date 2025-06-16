import SideBar from "./SideBar";
import Chart from "./Chart";
import Cards from "./Cards";
import UserWidget from "./UserWidget";
import Activities from "./Activities";
// import "../styles.css/dashboard.css";

function Dash(){
    return(
        <div className="dashboard">
            <h3>hello</h3>
            <SideBar/>
            <main className="dashboard-content">
                <UserWidget />

                <section className="dashboard-stats">
                    <Cards title="revenue" value="15k"/>
                     <Cards title="revenue" value="15k"/>
                      <Cards title="revenue" value="15k"/>
                </section>

                <Chart/>

                <section className="dashboard-activity">
                    <h3>Recent Activity</h3>
                    <Activities activity="user placed an order"/>
                    <Activities activity = "new user signed up"/>
                </section>

            </main>
        </div>
    )
}

export default Dash;