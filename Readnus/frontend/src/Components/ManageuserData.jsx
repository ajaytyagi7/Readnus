import React, { useState,useEffect } from 'react'
import { enqueueSnackbar } from 'notistack'
import { table } from '@uiw/react-md-editor'

const ManageuserData = () => {
    const [userList, setuserList] = useState([])

    const fetchuserdata=async() =>{
        const res=await fetch('http//localhost:5000/user/getall')
        console.log(res.status);

        const data= await res.json();
        console.log(data);
 
        setuserList(data);
    }

    useEffect(()=>{
        fetchuserdata();
    },[]);

    const deleteuserData=async( id) =>{
        const res=await fetch('http//localhost:5000/user/getbyid'+id,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await res.json();
        console.log(data);
        fetchuserdata();

        if(res.status==200){
            enqueueSnackbar('Deleted Successfully',{variant:'success'});
        }else{
                enqueueSnackbar('Some thing went wrong',{variant:'error'})
            }
    }

    const displayuserData=()=>{
        return <table className='table table-secondary'>
            <thead>
                <tr>
                    <th>Name </th>  
                    <th>Email </th>  


                </tr>
            </thead>
            <tbody>
                {
                    userList.map((item)=>{
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
        {displayuserData()}
    </div>
  )
}

export default ManageuserData