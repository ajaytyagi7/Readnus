import React, { useState ,useEffect} from 'react'

const ManageStory = () => {
    const [storyData, setstoryData] = useState([])

    const fetchstoryData=async() =>{
        const res=await fetch('http//localhost:5000/write/getall')
        console.log(res.status);

        const data= await res.json();
        console.log(data);
 
        setstoryData(data);
    }

    useEffect(()=>{
        fetchstoryData();
    },[]);

    const deleteuserData=async( id) =>{
        const res=await fetch('http//localhost:5000/write/getbyid'+id,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await res.json();
        console.log(data);
        fetchstoryData();

        if(res.status==200){
            enqueueSnackbar('Deleted Successfully',{variant:'success'});
        }else{
                enqueueSnackbar('Some thing went wrong',{variant:'error'})
            }
    }

    const displaystoryData=()=>{
        return <table className='table table-secondary'>
            <thead>
                <tr>
                    <th>Name </th>  
                    <th>Email </th>  


                </tr>
            </thead>
            <tbody>
                {
                    storyData.map((item)=>{
                        return <tr>
                            <td>Ajay</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    }
  return (
    <div>

    {displaystoryData()}
    </div>
  )
}

export default ManageStory