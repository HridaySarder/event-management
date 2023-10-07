import { Link } from "react-router-dom";


const Login = () => {

 

  return (
    <div>
     
     <div>
     <h2 className="text-3xl text-center my-10">Please login</h2>
      
      <form className="md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email" name="email" placeholder="email" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            
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