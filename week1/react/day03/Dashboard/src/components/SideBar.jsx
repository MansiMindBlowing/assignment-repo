function SideBar(){
    return(
        <div>
            <aside style={{width:"200px", backgroundColor:"lightcoral", padding:"1rem", color:"white"}}>
                <h2>MyApp</h2>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Users</li>
                        <li>Settings</li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default SideBar;