/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const EventCard = ({events}) => {

const {id,name,image,price,shortDetails,detailsBtn} = events

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
  <figure><img className="h-80 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{shortDetails}</p>
    <div className="card-actions justify-end items-center">
      <p className="text-xl">Price: {price}</p>
      <Link to={`/events/${id}`}><button className="btn bg-cyan-500 p-3 text-white">{detailsBtn}</button></Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default EventCard;