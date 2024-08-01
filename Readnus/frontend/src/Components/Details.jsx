import React,{useState,useEffect} from 'react'


const Details = () => {
    const [storyDetail, setstoryDetail] = useState([])

    const fetchstoryData=async() =>{
        const res=await fetch('http://localhost:5000/write/getall')
        console.log(res.status);

        const data= await res.json();
        console.log(data);
 
        setstoryDetail(data);
    }

    useEffect(()=>{
        fetchstoryData();
    },[]);
  return (
    <div className='bg-secondary-subtle'>
        {
            storyDetail.map((item)=>{
                return(
                    <div className="col-md-10 mx-auto ">
                        <img className='mx-auto ' src={'http://localhost:5000/' + item.image} alt="" />
                        <h1 className='text-3xl text-center font-semibold py-4'>{item.title}</h1>
                        <h1>{item.story}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Details