import { useParams } from "react-router-dom";



const Events = () => {

  const {id} = useParams()

  return (
    <div>
      This is event
      
      <p>{id}</p>
    </div>
  );
};

export default Events;