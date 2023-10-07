import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import EventCard from "../Pages/EventCard";


const Home = () => {
const events = useLoaderData()


  return (
    
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {
          events.map(event => <EventCard key={event.id} events={event}></EventCard>)
        }
      </div>
    </div>
  );
};

export default Home;