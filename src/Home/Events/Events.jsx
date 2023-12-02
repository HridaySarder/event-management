
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";



const Events = () => {
  const events = useLoaderData()
  const {name,image,price,shortDetails,details} = events
 

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-center text-3xl text-lime-500">Events Details:{events.length}</h2>
      <div className="card bg-base-100 shadow-xl">
  <figure><img className="h-80 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{shortDetails}</p>
    <div className="card-actions justify-end items-center">
      <p className="text-xl">Price: {price}</p>
      <p>{details}</p>
     
    </div>
  </div>
</div>
      
      
    </div>
  );
};

export default Events;