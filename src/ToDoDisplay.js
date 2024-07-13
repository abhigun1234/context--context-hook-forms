import React from 'react';

function ToDoDisplay(props) {
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

export default ToDoDisplay;