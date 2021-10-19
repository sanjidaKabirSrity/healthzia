import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const SignUp = () => {
    const combineContext = useAuth();
    const { firebaseContext } = combineContext;
    const {signInUsingGoogle , handleSignUpWithEmail , setIsLoading} = firebaseContext;

     // redirect private route
  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location.state?.from || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const { Name, Email, Password } = data;
        handleSignUpWithEmail(Name, Email, Password);
      };

      const handleGoogleSign = () =>{
        signInUsingGoogle()
        .then((result) => {
          const user = result.user;
          history.push(redirectUrl);

          console.log(user);
      }).catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
      })
      .finally(() => setIsLoading(false));
    }

    return (
        <div className="form md:py-16 py-0"> 
            <div className="bg-white flex flex-col lg:w-2/6 md:mt-0 md:w-1/2 mt-10 mx-auto p-8 rounded-lg shadow-lg w-full">
            <h2 className="font-medium mb-5 mx-auto text-2xl text-lg text-primary title-font">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray">Name</label>
                <input required type="text"
                {...register("Name", { required: true, maxLength: 80 })} className="w-full bg-white rounded border border-gray focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {errors.Name && (
                    <span className="field-error">This field is required</span>
                )}
            </div>
            <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray">Email</label>
                <input required type="email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className="w-full bg-white rounded border border-gray focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {errors.Email && (
                    <span className="field-error">This field is required</span>
                )}
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray">Password</label>
                <input required type="password"
                {...register("Password", {
                required: true,
                pattern:/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})/i,
                })} className="w-full bg-white rounded border border-gray focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {errors.Password && (
                    <span className="field-error">
                        Password should have at least 8 chracters, 2 uppercase, 3
                        lowercase, 1 special character, 2 numbers.
                    </span>
                )}
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray">Confirm Password</label>
                <input required type="password" {...register("ConfrimPassword", {
                required: true,
                pattern:/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})/i,
                })} className="w-full bg-white rounded border border-gray focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {errors.ConfrimPassword && (
                    <span className="field-error">
                        Password should have at least 8 chracters, 2 uppercase, 3
                        lowercase, 1 special character, 2 numbers.
                    </span>
                )}
            </div>
            <button type="submit" className="w-full text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
            </form>
            
            <p className="mx-auto my-2 text-gray text-sm">Already I have an account? <Link  to="/signin" className="text-primary">Sign in</Link></p>
            <button onClick={handleGoogleSign} className="bg-primary h-12 mx-auto p-2 rounded-full text-3xl text-white w-12">
                <i className="fab fa-google"></i>
            </button>
            <p className="text-xs text-gray mt-5 mx-auto">POWERED BY HEALTHZIA ORGANIZATION</p>
            </div>
        </div>


        
        
    );
};

export default SignUp;