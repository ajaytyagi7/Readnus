import React from 'react'
import  { useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'

const Write = () => {
    const [desc, setDesc] = React.useState('');
    
    const WriteForm = useFormik({
        initialValues: {
            title: '',
            description: '',
            story:'',


        },

        onSubmit: async (value) => {
            value.story = desc;
            console.log(value)
            const res = await fetch('http://localhost:5000/write/add', {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {
                    'Content-type': 'application/json'
                }
            });

            const data = await res.json();
            if (res.status == 200) {
                enqueueSnackbar(' Story Post Successfully', { variant: 'success' })
            } else if (res.status == 401) {
                enqueueSnackbar('Invalid Post ', { variant: 'error' })
            } else {
                enqueueSnackbar('Something went wrong', { variant: 'error' })
            }



        },

       
    });
  return (
    <div className='container-fluid bg-secondary-subtle '>
        <div>
            <div className="col-md-8 mx-auto py-5">
                <div className="card shadow-2xl p-5">
                    <div className="card-body">
                        <form onSubmit={WriteForm.handleSubmit}>
                        <h1 className='text-4xl font-semibold text-center mb-3'>Write</h1><hr />
                        <label className='text-2xl ' htmlFor="">Title</label>
                        <input type="text" className='form-control mb-3 ' placeholder='Enter Title' id='title' onChange={WriteForm.handleChange} value={WriteForm.values.title} />
                        <label className='text-2xl ' htmlFor="">  Description</label>
                        <input type="text" className='form-control mb-3' placeholder='Enter Description' id='description' onChange={WriteForm.handleChange} value={WriteForm.values.description} />
                        <label className='text-2xl ' htmlFor="">Tell Story</label>
                        

                        <MDEditor
                            value={desc}
                            onChange={setDesc}
                            plzceholder='Enter Story'
                            className='bg-white text-black mt-3 mb-3'
                         />
                         <button className='w-100 bg-pink-600 text-white p-3'>Submit</button>
                         </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Write