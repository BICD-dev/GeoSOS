import medic from "../assets/medic.jpg";
import crime from "../assets/crime-scene.webp";
import flame from "../assets/flame.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import SpanCard from "../components/cards/SpanCard";
import { useState } from "react";
const Home = () => {
  const images = [flame, crime, medic];
  // const api_key = "AIzaSyAQbt43t0MnAbC6eSSQlodH8bbDeSJu6aw" // google
  const [location, setLocation] = useState({ lat: null, long: null });
  const [error, setError] = useState(null);

// get the latitude and longitude of the user
  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          setLocation({
            latitude,
            longitude,
          });

          getAddressFromCoordinates(location.latitude, location.longitude);
          console.log(location.latitude, location.longitude)
        },
        (error) => {
          setError(error.message);
        },
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }
  

  function getAddressFromCoordinates(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
  
    axios
      .get(url)
      .then((response) => {
        console.log("Address:", response.data.display_name);
      })
      .catch((error) => {
        console.error("Error fetching address:", error);
      });
  }
  
  

  return (
    <div className=" text-center ">
      <h1 className="text-2xl font-semibold mb-4 ">Dashboard</h1>
      <p className="text-lg font-semibold mb-4 ">
        Welcome to GeoSOS, the emergency response system. Please navigate
        through the options below to get help.
      </p>
      <section className="p-4 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4 capitalize ">
        {images.map((image, index) => {
          let text;

          if (image === medic) {
            text = "medical assistance";
          } else if (image === crime) {
            text = "report a crime";
          } else {
            text = "fire emergency";
          }
          return (
            <Link key={index} to={`/help/${text.replace(/\s/g, "-")}`}>
              <SpanCard image={image} text={text} />
            </Link>
          );
        })}
        {/* set up permission */}
        <span className="bg-[#10B981] font-bold text-white h-48 flex flex-col items-center justify-center text-2xl shadow-xl rounded-md hover:cursor-pointer relative"
        onClick={getLocation}>
          <div className="absolute inset-0 bg-gray-800 opacity-50 rounded-md"></div>
          <h1 className="relative">set up permission</h1>
        </span>
      </section>
      <section className="p-4 bg-blue-200 h-fit text-center mt-3 mb-3">
        <h1 className="font-semibold my-2 text-xl ">Why GeoSOS</h1>
        <section className=" grid grid-cols-1 gap-2 md:grid-cols-3 ">
          <span className=" my-4 flex flex-col bg-white item-center rounded-sm justify-center h-[13rem] shadow-lg">
            <h1 className="text-xl font-semibold capitalize">Instant Location Sharing</h1>
          </span>
          <span className=" my-4 flex flex-col bg-white item-center rounded-sm justify-center h-[13rem] shadow-lg">
            <h1 className="text-xl font-semibold capitalize">Fast and reliable assistance</h1>
          </span>
          <span className=" my-4 flex flex-col bg-white item-center rounded-sm justify-center h-[13rem] shadow-lg">
            <h1 className="text-xl font-semibold capitalize">Offline SOS support</h1>
          </span>
        </section>
      </section>

      <section className="p-4 h-fit text-justify mt-3 mb-3">
        <h1 className="font-semibold my-2 text-xl capitalize text-center">
          How it works
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eos
          similique exercitationem quidem voluptatibus, a nisi odit praesentium
          laborum quibusdam ea non officia quod architecto sint ex, doloribus
          tempora vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Assumenda a quisquam, laudantium hic veritatis doloremque ratione
          excepturi odio consequuntur! 
        </p>
      </section>

      <section className="p-4 h-fit text-justify mt-3 mb-3">
        <h1 className="font-semibold my-2 text-xl capitalize text-center">
          Places we have reached
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
          aspernatur dolore. Molestiae deserunt reprehenderit labore
          perspiciatis aliquam, odit similique voluptatum, ullam minus animi
          distinctio, error est quia ipsa repellendus nesciunt.
        </p>
      </section>

    </div>
  );
};

export default Home;
