import { useParams } from "react-router-dom";
import Navbar from "../Navbar";



const Events = () => {

  const {details} = useParams()

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-center text-3xl text-lime-500">Events Details:</h2>
      
      <p>{details}</p>
    </div>
  );
};

export default Events;