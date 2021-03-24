import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function App() {
 const [num, setnum] = useState()
const [name,setname]=useState()
const [move,setmoves]=useState()
const [image, setimage] = useState()

 useEffect(()=>{
   
   async function getData(){
const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)

 
setname(res.data.name)
setmoves(res.data.moves.length)


   }
   getData()
 })
 
 
 
  return (
    <div>
      <h1>You selected <span style={{color:"red"}}>{name}</span> </h1>
<h1>YOu have Selected this "{num}" </h1>
<h1>he has <span style={{color:"red"}}>{move}</span>  moves </h1>

      <select value={num} onChange={(event)=>{
        setnum(event.target.value)
      }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">4</option>
        <option value="5">5</option>
      </select>
    </div>
  )
}
