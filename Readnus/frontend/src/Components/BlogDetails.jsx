import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const { id } = useParams();

  const fetchBlogDetails = async () => {
    const res = await fetch('http://localhost:5000/blog/getbyid/' + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setBlogDetails(Array.isArray(data) ? data : [data]);
  };

  useEffect(() => {
    fetchBlogDetails();
  }, []);

  const displayData = () => {
    return (
      <div className='col-md-10 mx-auto'>
        {blogDetails.map((item) => (
          <div className='py-5' key={item.id}>
            <img className='img-fluid mx-auto' src={'http://localhost:5000/' + item.image} alt="" />
            <h1 className='text-center text-4xl font-semibold mb-4'>Welcome To Blog</h1>
            <h1 className='mt-5 text-3xl font-semibold mb-3 text-center'>{item.title}</h1>
            <h1>Readnus</h1>
            <p>{item.date}</p>
            <MDEditor.Markdown className='p-3 bg-secondary-subtle' source={item.details} style={{ whiteSpace: 'pre-wrap' }} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='bg-secondary-subtle'>
      {displayData()}
    </div>
  );
};

export default BlogDetails;