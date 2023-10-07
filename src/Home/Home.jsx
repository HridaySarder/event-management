import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import EventCard from "../Pages/EventCard";
import Banner from "./Banner";
import Footer from "./Footer";


const Home = () => {
const events = useLoaderData()


  return (
    
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <h2 className="text-5xl font-bold text-center my-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {
          events.map(event => <EventCard key={event.id} events={event}></EventCard>)
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;