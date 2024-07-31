import React, { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';

const ManageStory = () => {
  const [storyData, setStoryData] = useState([]);

  const fetchStoryData = async () => {
    try {
      const res = await fetch('http://localhost:5000/story/getall');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Received non-JSON response");
      }
      const data = await res.json();
      setStoryData(data);
    } catch (error) {
      console.error('Failed to fetch story data:', error);
      enqueueSnackbar('Failed to fetch story data', { variant: 'error' });
    }
  };

  useEffect(() => {
    fetchStoryData();
  }, []);

  const deleteStoryData = async (id) => {
    try {
      const res = await fetch('http://localhost:5000/story/delete/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Received non-JSON response");
      }
      const data = await res.json();
      console.log(data);
      fetchStoryData();

      enqueueSnackbar('Deleted Successfully', { variant: 'success' });
    } catch (error) {
      console.error('Failed to delete story data:', error);
      enqueueSnackbar('Failed to delete story data', { variant: 'error' });
    }
  };

  const displayStoryData = () => {
    return (
      <table className='table table-primary'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Story</th>
            <th>Delete Data</th>
          </tr>
        </thead>
        <tbody>
          {storyData.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.story}</td>
              <td>
                <button className='bg-pink-500 p-2 w-24' onClick={() => deleteStoryData(item._id)}>Delete</button>
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
         {displayStoryData()}

        </div>
    </div>
  );
};

export default ManageStory;