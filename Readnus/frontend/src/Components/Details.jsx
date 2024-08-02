import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';

const Details = () => {
  const [storyDetail, setStoryDetail] = useState([]);
  const { id } = useParams();

  const fetchStoryData = async () => {
    try {
      const res = await fetch('http://localhost:5000/write/getbyid/' + id);
      console.log(res.status);

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      console.log(data);

      setStoryDetail(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchStoryData();
  }, []);

  return (
    <div className='bg-secondary-subtle'>
      {storyDetail.map((item) => (
        <div className="col-md-10 mx-auto" key={item.id}>
          <img className='mx-auto' src={'http://localhost:5000/' + item.image} alt="" />
          <h1 className='text-center text-4xl font-semibold mb-4'>Welcome To Reading</h1>
          <h1 className='text-3xl text-center font-semibold py-4'>{item.title}</h1>
          <h1 className='text-center'>{item.description}</h1>
          <MDEditor.Markdown className='p-3 bg-secondary-subtle' source={item.story} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
      ))}
    </div>
  );
};

export default Details;