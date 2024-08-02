import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='bg-secondary-subtle'>
        <div className='py-4'>
            <h1 className='text-center text-5xl font-semibold mb-2'>Admin Panel</h1>
        </div>
        <div className="row gap-y-5 p-5">
            <div className="col-md-4 ">
                <div className="card shadow-2xl p-5">
                    <Link to={'/Write'}><h1 className='text-center p-5 text-3xl font-semibold underline'>Post Story</h1></Link>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-5 shadow-2xl">
                   <Link to={'/UploadBlog'}> <h1 className='text-center p-5  text-3xl font-semibold underline '>Post Blog</h1></Link>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-5 shadow-2xl">
                   <Link to={'/ManageStory'}> <h1 className='text-center p-5  text-3xl font-semibold underline'>Manage Story</h1></Link>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-5 shadow-2xl">
                   <Link to={'/ManageuserData'}> <h1 className='text-center p-5  text-3xl font-semibold underline'>Manageuser</h1></Link>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-5 shadow-2xl">
                    <Link ><h1 className='text-center p-5  text-3xl font-semibold underline'>Manage Payment</h1></Link>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-5 shadow-2xl">
                   <Link to={'/ManageBlog'}> <h1 className='text-center p-5  text-3xl font-semibold underline'>Manage Blog</h1></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin