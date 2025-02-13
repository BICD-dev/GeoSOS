import medic from "../assets/medic.jpg";
import crime from "../assets/crime-scene.webp";
import flame from "../assets/flame.jpg";
import { Link } from "react-router-dom";
import SpanCard from "../components/cards/SpanCard";
const Home = () => {
  const images = [flame, crime, medic];
  return (
    <div className="p-4 text-center ">
      <h1 className="text-2xl font-semibold mb-4 ">Dashboard</h1>
      <p className="text-lg font-semibold mb-4 ">
        Welcome to GeoSOS, the emergency response system. Please navigate
        through the options below to get help.
      </p>
      <section className="grid grid-cols-4 gap-4 capitalize ">
        {images.map((image, index) => {
          let text;

          if(image === medic){
            text = "medical assistance";
          }else if(image === crime){
            text = "report a crime";
          }else{
            text = "fire emergency";
          }
          console.log();
          return (
            <Link key={index} to={`/help/${text.replace(/\s/g, "-")}`}>
              <SpanCard image={image} text={text} />
            </Link>
          );
        })}
        {/* set up permission */}
        <span className="bg-[#10B981] font-bold text-white h-48 flex flex-col items-center justify-center text-2xl shadow-xl rounded-md hover:cursor-pointer relative">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <h1 className="relative">set up permission</h1>
        </span>
      </section>
    </div>
  );
};

export default Home;
