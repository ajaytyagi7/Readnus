import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blog/getall');
        setBlogList(response.data);
      } catch (error) {
        console.error('Failed to fetch blog data:', error);
      }
    };

    fetchBlogData();
  }, []);

 

  return (
    <div>
      <header className='bg-stone-300'>
        <div className='p-16'>
          <h1 className='text-center text-5xl font-bold'>Welcome to our Blogs</h1>
          <h1 className='text-center mt-3 font-semibold'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta blanditiis veritatis, debitis quidem asperiores harum magnam doloribus voluptates unde,.
          </h1>
        </div>
      </header>
      <div>
         <div className="container">
          <div className="row">
            {
            blogList.map((item) =>{
              return(<div className='col-md-3 mt-3'>
                <Link to={'./BlogDetails'}>  <div className="card">
                    <div className="card-body">
                      <img className='img-fluid' src={'http://localhost:5000/' + item.image} alt="" />
                      <h1 className='text-center text-2xl font-semibold'>{item.title}</h1>
                    </div>
                  </div>
                  </Link>
              </div>
                
              )
            })
        }
          </div>
         </div>
        
      </div>
    </div>
  );
};

export default Blog;