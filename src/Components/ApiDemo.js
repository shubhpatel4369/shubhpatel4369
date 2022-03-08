import React from 'react'
import axios from 'axios'


export const ApiDemo = () => {
    const getData = () => {

        axios.get ('http://localhost:4000/roles').then(res=>{
            console.log(res.data)
        })
    } 
    const postData =() => {
        var data = {
            roleName:"Admin"


       }

        axios.post('http://localhost:4000/roles',data).then(res => {
            console.log(res);
        })
    }

    const deleteData = () =>{
        
        var id = '620dd63ef9eb60ba0594d3d1';
        axios.delete(`http://localhost:4000/roles/` + id).then(res =>{
            console.log(res.status);

            if(res.status == 200){
                console.log("Deleted Successfully")
            }
            else{
                console.log("not deleted");

            }
        })
    }   


    const putData = () =>{
        var id =`6214cfbfcd38e1431956b221`;
        var data ={
            roleName:"PATEL Shubh"
        }
        axios.put(`http://localhost:4000/roles/`+id,data).then(res=>{
          

            if(res.status == 200){
                alert("updated SuccessFully")
            }
            else{
                alert("not updated")
            }
            console.log(res.data)
        })
    }
    


    return (
   <div>
       <button onClick={getData}>Get Data</button>
       <br/>
       <button onClick={postData}>Post Data</button>
       <br/>
       <button onClick={deleteData}>Delete Data</button>
       <br/>
       <button onClick ={putData}>Update Data</button>
       <br/>
    </div>
  )
}
