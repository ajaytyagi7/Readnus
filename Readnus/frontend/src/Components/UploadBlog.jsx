import React from 'react'
import MDEditor from '@uiw/react-md-editor';
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'


const UploadBlog = () => {
    const [desc, setDesc] = React.useState('');

    const BlogForm = useFormik({
        initialValues: {
            title: '',
            date:'',
            details:'',
            


        },

        onSubmit: async (value) => {
            value.details = desc;
            console.log(value)
            const res = await fetch('http://localhost:5000/blog/add', {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {
                    'Content-type': 'application/json'
                }
            });

            const data = await res.json();
            if (res.status == 200) {
                enqueueSnackbar(' Blog Post Successfully', { variant: 'success' })
            } else if (res.status == 401) {
                enqueueSnackbar('Invalid Post ', { variant: 'error' })
            } else {
                enqueueSnackbar('Something went wrong', { variant: 'error' })
            }



        },

       
    });
  return (
    <div className='bg-secondary-subtle'>
        <div className=''>
            <div className="col-md-10 mx-auto py-3  ">
                <div className="card p-5">
                    <div className="card-body">
                        <h1 className=' text-4xl font-bold text-center mb-2'>Blog</h1><hr />
                        <form onChange={BlogForm.handleSubmit} >
                        <input type="text" className='form-control mb-3 mt-5 p-3' id='title' placeholder='Enter Title..' onChange={BlogForm.handleChange} value={BlogForm.values.title}/>
                        <input type="date" className='form-control mb-3 p-3' placeholder='Enter Date' id='date' onChange={BlogForm.handleChange} value={BlogForm.values.date} />
                        <label className='text-2xl font-semibold' htmlFor="">Enter Details</label>
                        <MDEditor
                            value={desc}
                            onChange={setDesc}
                            plzceholder='Enter detalis'
                            className='bg-white text-black mt-3 mb-3'
                         />
                         <button className='p-3 bg-pink-600 w-100 font-semibold mt-3'>Submit</button>



                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UploadBlog