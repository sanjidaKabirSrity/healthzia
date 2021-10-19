import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const SignIn = () => {
    const {signInUsingGoogle , handleSignInWithEmail} = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const { Email, Password } = data;
        handleSignInWithEmail(Email, Password);
      };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input required type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                 /><br />
                {errors.Email && (
                    <span className="field-error">This field is required</span>
                )}
                <input required  type="password" placeholder="Password" {...register("Password", {
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
                <input type="submit" value="Sign in" /><br />
            </form>
            <p>New to HEALTHZIA? <Link to="/signup">Create a account</Link></p>
            <button onClick={signInUsingGoogle}>Google</button>
        </div>
    );
};

export default SignIn;