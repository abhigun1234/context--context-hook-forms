import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PostData(props) {
  const [userData,setData] =useState({userId:'',title:'',body:''})
const [response,setResponse]=useState('')
  function  postData(e){

            console.log("person data",userData)
            e.preventDefault()
            axios.post('https://jsonplaceholder.typicode.com/posts',userData).then(res=>{
            console.log("posted",res.status)
            setResponse(res.status)
   }).catch(error=>{

   })
   }
    return (
        <div>
            <div>
            <form onSubmit={postData}>
            <h1>Post Data</h1>
                    
                <div>
                  <label>Enter uset Id</label>
                <input type='text' name='userId' onChange={e=>setData({...userData,userId:e.target.value})}></input>
                </div>
                <div>
                <label>Enter uset Title </label>
                <input type='text' name='title' onChange={e=>setData({...userData,title:e.target.value})}></input>
                </div>
                <div>
                <label>Enter uset body </label>
                <input type='text' name='body' onChange={e=>setData({...userData,body:e.target.value})}></input>
                </div>
                <button type='submit'>submit</button>
                <label>Response :{response}</label>
             </form>
           
            </div>
            
            </div>
       
    );
}

export default PostData;