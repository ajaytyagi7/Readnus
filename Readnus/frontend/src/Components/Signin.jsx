import React from 'react'
import * as Yup from 'yup';
import {  useFormik } from 'formik';
import {  enqueueSnackbar } from 'notistack';

const SigninSchema=Yup.object().shape({
    email:Yup.string().email('Invalid Email').required('Password Require'),
    password:Yup.string().required('Password is Require').min(8,'Password is too short'),
  });

const Signin = () => {
    const signinform=useFormik({
        initialValues:{
          password:"",
          email:"",
        },
        onSubmit:async(values)  =>{
          console.log(values);
          const res= await fetch('http://localhost:5000/user/authenticate',{
            method:'POST',
            body:JSON.stringify(values),
            headers:{
              'Content-Type' :'application/json'
            }

          });

          console.log(res.status);  

          const data = await res.json();
          if(res.status==200){
            enqueueSnackbar('Signed in successfully' ,{variant:'success'});
            sessionStorage.setItem('user', JSON.stringify(data));
            // navigate('/')

          }else if(res.status==401){
            enqueueSnackbar('Invalid Email',{variant:'error'});

          }else{
            enqueueSnackbar('Something went wrong',{variant:'error'});
          }

        },
      });
    
  return (
    <div className=' bg-secondary-subtle signin'>
        <div className='col-md-4 mx-auto py-5'>
            <div className="card shadow mt-5">
                <div className="card-body p-4">
                    <h3 className="text-center text-4xl mb-3 font-semibold"> Signup</h3><hr />
                    <form onSubmit={signinform.handleSubmit}>
                            <span className='ms-4 fs-6 text-danger'>{  signinform.errors.email}</span>
                            <input type="text" className="form-control mb-3 " placeholder="Enter  Email" id="email"  onChange={signinform.handleChange} value={signinform.values.email}  />
                            <span className='ms-4 fs-6 text-danger'>{  signinform.errors.password}</span>
                            <input type="password" className="form-control mb-3" placeholder="Enter Password" id="password"  onChange={signinform.handleChange} value={signinform.values.password}   />
                            <button type="submit" className="btn btn-primary btn-block w-100 ">Signin</button>
                    </form>
                    <p className="text-center mt-3">Don't have an account? <a href="/Signup">Signup Now</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin