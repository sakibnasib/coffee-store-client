import React, { use } from 'react';
import { AuthContex } from '../Provider/AuthProvider';

const Login = () => {
    const{signIn}=use(AuthContex)
    const handleLogin=e=>{
 e.preventDefault();
 const form=e.target ;
 const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
          // console.log(result.user)
          const singInInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                // database
                fetch('https://coffee-store-server-sandy-six.vercel.app/users',{
                  method:"PATCH",
                  headers:{
                    'content-type': 'application/json'
                  },
                  body:JSON.stringify(singInInfo)
                })

        })
    }
    return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl p-10">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><p className="link link-hover">Forgot password?</p></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
    );
};

export default Login;