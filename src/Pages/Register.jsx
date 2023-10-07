import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,photo,email,password);
    createUser(email,password)
.then(result => {
  console.log(result.user);
})
.catch(error => 
  console.error(error))

     }

  return (
    <div>
     <Navbar></Navbar>
     <div>
     <h2 className="text-3xl text-center my-10 text-[#039be5] font-bold">Please Register</h2>
      
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input type="text" name="name" placeholder="Write your name" className="input input-bordered" required />
           </div>
      <div className="form-control">
             <label className="label">
               <span className="label-text">Image</span>
             </label>
             <input type="text" name="photo" placeholder="Your image" className="input input-bordered" required />
           </div>
      <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email" name="email" placeholder=" Write your email" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" name="password" placeholder="Write your password" className="input input-bordered" required />
            
           </div>
           <div className="form-control mt-6">
             <button type="submit" className="btn btn-success">Register</button>
           </div>
      </form>
      <p className="text-center mt-4">Already have an account? Please <Link className="text-[#F75B5F] font-bold" to={"/login"}>Login</Link></p>
     </div>
     
    </div>
  );
};

export default Register;