import Customize from "../components/Customize";

const CrimeEmergency = () => {
    const reportCrime =  ()=>{
        console.log("crime!!");
        alert("An SOS has been sent out with your location\n  pls stay nearby and a unit will be sent to your aid");

    }
    return ( 
        <div className="border h-screen px-4 flex flex-col  items-center">
            <h1 className="text-4xl font-semibold my-10">Send an SOS</h1>

            <button onClick={reportCrime} className="rounded-lg bg-gray-600 hover:bg-gray-800 h-[20rem] w-[20rem] flex justify-center items-center shadow-xl cursor-pointer">
                <h1 className="text-white font-bold text-4xl ">CLICK ME</h1>
            </button>
            <Customize/>
        </div>
     );
}
 
export default CrimeEmergency;