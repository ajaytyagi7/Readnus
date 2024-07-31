import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';

const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required ').min(4, 'Name is too short'),
    email: Yup.string().email('Invalid email').required(' Email is Required'),
    password: Yup.string().required('password id Required').min(8, 'Password is too short')
      .matches(/[a-z]/, 'Password must include Lowercase letter')
      .matches(/[A-Z]/, 'Password must include uppercase letter')
      .matches(/\W/, 'Password must include Number'),
    confirm: Yup.string().oneOf([Yup.ref('password')], null, 'Confirm Passwords must match ').required('Confirm Password is required')
  
  });

const Signup = () => {

    const signForm = useFormik({
        initialValues: {
    
          name: '',
          email: '',
          password: '',
          confirm: '',
    
        },
    
        onSubmit: async (values, { setSubmitting }) => {
          console.log(values);
    
          const res = await fetch('http://localhost:5000/user/add', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'content-Type': 'application/json'
            }
          });
    
          setSubmitting(false)
          console.log(res.status);
    
          if (res.status == 200) {
            enqueueSnackbar('Register Successfuly ', { variant: 'success' });
          } else if (res.status == 401) {
            enqueueSnackbar('Invalid Email', { variant: 'error' });
           
          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
    
          }
    
    
    
        },
        validationSchema: SignupSchema
      }
      );
  return (
    <div className='signin  bg-secondary-subtle'>
          <div className="col-md-4 mx-auto py-5 ">
            <div className="card mt-5 ">
                <div className="card-body p-4">
                    <h3 className="card-title text-center text-4xl font-semibold  "> Signup</h3><hr />
                    <form onSubmit={signForm.handleSubmit}> 
                             <span className='ms-4 fs-6 text-danger'>{signForm.touched.name && signForm.errors.name}</span>
                            <input type="text" className="form-control mb-3 mt-4" id="name" placeholder="Enter name"  onChange={signForm.handleChange} value={signForm.values.name}/>
                            <span className='ms-4 fs-6 text-danger'>{signForm.touched.email && signForm.errors.email}</span>
                            <input type="email" className="form-control mb-3" id="email" placeholder="Enter email"  onChange={signForm.handleChange} value={signForm.values.email} />
                            <span className='ms-4 fs-6 text-danger'>{signForm.touched.password && signForm.errors.password}</span>
                            <input type="password" className="form-control mb-3" id="password" placeholder="Enter password" onChange={signForm.handleChange} value={signForm.values.password} />
                            <span className='ms-4 fs-6 text-danger'>{signForm.touched.confirm && signForm.errors.confirm}</span>
                            <input type="password" className="form-control mb-3" id="confirm" placeholder="Confirm password" onChange={signForm.handleChange} value={signForm.values.confirm}  />

                            <button type="submit" className="btn btn-primary btn-block w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup