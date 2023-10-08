import Navbar from "../Home/Navbar";
import {  FaPhone } from 'react-icons/fa';
import {  MdOutlineMailOutline } from 'react-icons/md';

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-5"> 
      <h2 className="text-5xl text-center mb-4 text-lime-600">To know about our events.Please contact us:</h2>
      <p className="flex items-center gap-3 text-3xl justify-center"><FaPhone className="text-2xl text-green-500"></FaPhone> Phone:0167777777</p>
      <p className="flex items-center gap-3 text-3xl justify-center"><MdOutlineMailOutline className="text-2xl text-red-400"></MdOutlineMailOutline>Email:abc@gmail.com</p>
      </div>
    </div>
  );
};

export default About;