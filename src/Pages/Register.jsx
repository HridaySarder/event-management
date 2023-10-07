import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div>
     
     <div>
     <h2 className="text-3xl text-center my-10">Please Register</h2>
      
      <form className="md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
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
             <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
            
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