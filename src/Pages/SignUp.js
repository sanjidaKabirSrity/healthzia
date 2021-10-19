import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const SignUp = () => {
    const {signInUsingGoogle , handleSignUpWithEmail} = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const { Name, Email, Password } = data;
        handleSignUpWithEmail(Name, Email, Password);
      };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input required type="text" placeholder="Name"
                {...register("Name", { required: true, maxLength: 80 })}
                 /><br />
                {errors.Name && (
                    <span className="field-error">This field is required</span>
                )}
                <input required type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                 /><br />
                {errors.Email && (
                    <span className="field-error">This field is required</span>
                )}
                <input required type="password" placeholder="Password" 
                {...register("Password", {
                required: true,
                pattern:/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})/i,
                })}
                /><br />
                {errors.Password && (
                    <span className="field-error">
                        Password should have at least 8 chracters, 2 uppercase, 3
                        lowercase, 1 special character, 2 numbers.
                    </span>
                )}
                <input required type="password" placeholder="Confirm Password" {...register("ConfrimPassword", {
                required: true,
                pattern:/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})/i,
                })}
                /><br />
                {errors.ConfrimPassword && (
                    <span className="field-error">
                        Password should have at least 8 chracters, 2 uppercase, 3
                        lowercase, 1 special character, 2 numbers.
                    </span>
                )}
                <input type="submit" value="Sign Up" /><br />
            </form>
            <p>Already I have an account? <Link to="/signin">Sign in</Link></p>
            <button onClick={signInUsingGoogle}>Google</button>
        </div>
    );
};

export default SignUp;