import VictimInfo from "../../components/VictimInfo";

const Dashboard = () => {
    return ( 
        <div>
            <h1>Dashboard</h1>
            <p>See al current requests on this page</p>
            <p>All currently ongoing requests would be shown as {"Ongoing"}</p>
            <VictimInfo />
        </div>
     );
}
 
export default Dashboard;