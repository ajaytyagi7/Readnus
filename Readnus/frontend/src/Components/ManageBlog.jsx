import React, { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';

const ManageBlog = () => {
  const [blogData, setBlogData] = useState([]);

  const fetchBlogData = async () => {
    try {
      const res = await fetch('http://localhost:5000/blog/getall');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setBlogData(data);
    } catch (error) {
      console.error('Failed to fetch blog data:', error);
      enqueueSnackbar('Failed to fetch blog data', { variant: 'error' });
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const deleteBlogData = async (id) => {
    try {
      const res = await fetch('http://localhost:5000/blog/delete/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      console.log(data);
      fetchBlogData();

      enqueueSnackbar('Deleted Successfully', { variant: 'success' });
    } catch (error) {
      console.error('Failed to delete blog data:', error);
      enqueueSnackbar('Failed to delete blog data', { variant: 'error' });
    }
  };

  const displayBlogData = () => {
    return (
      <table className='table table-primary '>
        <thead >
          <tr >
            <th>Title</th>
            <th>Description</th>
            <th>Details</th>
            <th>Delete Data</th>
          </tr>
        </thead>
        <tbody>
          {blogData.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.details}</td>
              <td>
                <button className='bg-pink-500 p-2 w-24' onClick={() => deleteBlogData(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
        <div className='col-md-9 mx-auto py-3 '>
      {displayBlogData()}
      </div>
    </div>
  );
};

export default ManageBlog;