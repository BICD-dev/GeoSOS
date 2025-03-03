import VictimInfo from "../../components/VictimInfo";
const Dashboard = () => {
    return ( 
        <div className="p-4 flex flex-col items-justify">
            <span className="my-2 text-center">
                <h1 className="font-bold capitalize text-2xl ">Helper Dashboard</h1>
                <p>See all current requests on this page</p>
                <p>All currently ongoing requests would be shown as {"Ongoing"}</p>
            </span>

            <VictimInfo />
        </div>
     );
}
 
export default Dashboard;