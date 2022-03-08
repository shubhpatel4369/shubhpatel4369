import React, { useState } from 'react'

export const Tripplanning = () => {
    const [CountryName, setCountryName] = useState('')
    const [StateName, setStateName] = useState('')
    const [Userid, setUserid] = useState('')
    const [HotelName, setHotelName] = useState('')
    const [Duration, setDuration] = useState('')
    const [placestovisit, setplacestovisit] = useState('')
    const [Comments, setComments] = useState('')
   

    const CountryHandler = (e) =>{
        setCountryName(e.target.value)
    }
    const StateHandler = (e) =>{
        setStateName(e.target.value)
    }
    const UseridHandler = (e) =>{
        setUserid(e.target.value)
    }
    const HotelHandler = (e) =>{
        setHotelName(e.target.value)
    }
    const DurationHandler = (e) =>{
        setDuration(e.target.value)
    }
    const placestovisitHandler = (e) =>{
        setplacestovisit(e.target.value)
    }
    const CommentsHandler = (e) =>{
        setComments(e.target.value)
    }

    const Submit =(e)=>{
        e.preventDefault()
        alert(`CountryName: ${CountryName} \nStateName: ${StateName} \nUserid: ${Userid} \nHotelName: ${HotelName} \nDuration: ${Duration} \nplacestovisit: ${placestovisit} \nComments: ${Comments} `)
    }

  return (
      <div>
          <h1>Tripplanning Registration</h1>
          <form  onSubmit={Submit}>
   <table>
       <tr> 
           <td>CountryName</td>
           <td><input type= "text" name="CountryName" placeholder = "enter countryname"
           onChange={(e)=>{CountryHandler(e)}}></input></td>
       </tr>
       <tr> 
           <td>StateName</td>
           <td><input type= "text" name="StateName" placeholder = "enter statename"
           onChange={(e)=>{StateHandler(e)}}></input></td>
       </tr>
       <tr> 
           <td>Userid</td>
           <td><input type= "text" name="Userid" placeholder = "enter Userid"
           onChange={(e)=>{UseridHandler(e)}}></input></td>
       </tr>
       <tr> 
           <td>HotelName</td>
           <td><input type= "text" name="HotelName" placeholder = "enter hotelname"
           onChange={(e)=>{HotelHandler(e)}}></input></td>
       </tr>
       <tr> 
           <td>Duration</td>
           <td><input type= "text" name="Duration" placeholder = "enter duration"
           onChange={(e)=>{DurationHandler(e)}}></input></td>
       </tr>
       <tr> 
           <td>placestovisit</td>
           <td><input type= "text" name="CountryName" placeholder = "enter placestovisit"
           onChange={(e)=>{placestovisitHandler(e)}}></input></td>
       </tr>
       <tr> 
           <td>Comments</td>
           <td><input type= "text" name="Comments" placeholder = "enter comments"
           onChange={(e)=>{CommentsHandler(e)}}></input></td>
       </tr>
       <tr>
           <button type="submit">Submit</button>
       </tr>
   </table>
   </form>
   </div>
  )
}
