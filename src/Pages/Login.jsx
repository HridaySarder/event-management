import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {

  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

 const handleLogin = (e) => {
e.preventDefault()
const email = e.target.email.value;
const password = e.target.password.value;
console.log(email,password);

signIn(email,password)
.then(result => {
 console.log(result.user);

 navigate(location?.state ? location.state : "/")

})
.catch(error => {
 console.error(error);
})
 }



  return (
    <div>
     <Navbar></Navbar>
     <div>
     <h2 className="text-3xl text-center my-10 text-[#039be5] font-bold">Please login</h2>
      
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email" name="email" placeholder="Write your email" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" name="password" placeholder="Write your password" className="input input-bordered" required />
            
           </div>
           <div className="form-control mt-6">
             <button type="submit" className="btn btn-success">Login</button>
           </div>
      </form>
      <p className="text-center mt-4">Do not have an account? Please <Link className="text-[#F75B5F] font-bold" to={"/register"}>Register</Link></p>
     </div>
     
    </div>
  );
};


export default Login;