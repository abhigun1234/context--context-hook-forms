import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PostData(props) {
  const [userData,setData] =useState({prod_name:'',price:'',description:''})
const [response,setResponse]=useState('')
  function  postData(e){

            console.log("person data",userData)
            e.preventDefault()
//             axios.post('https://jsonplaceholder.typicode.com/posts',userData).then(res=>{
//             console.log("posted",res.status)
//             setResponse(res.status)
//    }).catch(error=>{

//    })


            console.log("person data",userData)
            axios.post('http://127.0.0.1:2004/addproduct',userData).then(response=>{

                console.log("response",response)
                setResponse(response.status)
            }).catch(error=>{
                console.log("error",error)
            })
   }
    return (
        <div>
            <div>
            <form onSubmit={postData}>
            <h1>Post Data</h1>
                    
                <div>
                  <label>Enter Product name</label>
                <input type='text' name='prod_name' onChange={e=>setData({...userData,prod_name:e.target.value})}></input>
                </div>
                <div>
                <label>Enter Price </label>
                <input type='text' name='price' onChange={e=>setData({...userData,price:e.target.value})}></input>
                </div>
                <div>
                <label>Enter Description </label>
                <input type='text' name='description' onChange={e=>setData({...userData,description:e.target.value})}></input>
                </div>
                <button type='submit'>submit</button>
                <label>Response :{response}</label>
             </form>
           
            </div>
            
            </div>
       
    );
}

export default PostData;