import React,{useState,useEffect} from 'react'


const BlogDetails = () => {
    const [blogDetails, setblogDetails] = useState([])

    const fetchblogDetalis=async() =>{
        const res=await fetch('http://localhost:5000/write/getall')
        console.log(res.status);

        const data= await res.json();
        console.log(data);
 
        setblogDetails(data);
    }

    useEffect(()=>{
        fetchblogDetalis();
    },[]);
  return (
    <div className='bg-secondary-subtle'>
        <div className='col-md-10 mx-auto '>
            {
                blogDetails.map((item)=>{
                    return (<div className='py-5'>
                        <img className='img-fluid mx-auto ' src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*vt6qfWOkoSe8yRBV" alt="" />
                        <h1 className='mt-5 text-3xl font-semibold mb-3 text-center'>Title</h1>
                        <p>date</p>
                        <h1 className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem labore quia, harum ut eos exercitationem illo velit? Blanditiis, veniam? Rerum nam cum illo incidunt consectetur amet sit reiciendis alias.</h1>
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default BlogDetails