const VictimInfo = () => {
  const obj = [
    {
      fullName: "Bright Iheagwam ",
      Location: [3.1477, 7.1456],
      RequestTime: "10:01 am",
      Message: "hey, i need help",
      EmergencyType: "fire",
      RescueStatus: "Pending",
      userId:"userid"
    },
    {
        fullName: "Esther Muomelite ",
        Location: [3.1277, 7.1426],
        RequestTime: "11:01 am",
        Message:"hey, i'm in a pinch",
        EmergencyType:"fire",
        RescueStatus:"Pending",
        userId:"userid"
    }
  ];

  console.log(obj);
  return (
    <div>
      <div className="grid grid-cols-4 text-gray">
        <h1 className="font-bold capitalize text-xl ">Full Name</h1>
        <h1 className="font-bold capitalize text-xl ">Message </h1>
        <h1 className="font-bold capitalize text-xl ">Request Time</h1>
        <h1 className="font-bold capitalize text-xl ">Rescue Status</h1>
      </div>
      {obj.map((victim, index) => {
        return (
          <div key={index} className="grid grid-cols-4 text-gray">
            <h1 className="font-semibold capitalize text-gray-600 ">{victim.fullName}</h1>
            <h1 className="font-semibold capitalize text-gray-600 ">{victim.Message}</h1>
            <h1 className="font-semibold capitalize text-gray-600 ">{victim.RequestTime}</h1>
            <h1 className="font-semibold capitalize text-gray-600 ">{victim.RescueStatus}</h1>
            
          </div>
        );
      })}
    </div>
  );
};

export default VictimInfo;
