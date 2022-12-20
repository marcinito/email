import Head from 'next/head'
import Image from 'next/image'
import { useEffect,useState,useRef } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [message,setMessage]=useState("")
const nameRef=useRef(null)
  async function handleOnSubmit(e) {
    e.preventDefault();
    if(name.length<3){
nameRef.current.style.backgroundColor="red"
setName("You need fill this field with more than 3 marks")
setTimeout(()=>{
  setName("")
  nameRef.current.style.backgroundColor="white"
},2000)
return

    }
    console.log("tu juz sie nie wykona")
    const formData = {};
    formData['name']=name
    formData['email']=email
    formData['message']=message
    console.log(formData)
   

  
  
   const res= await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    if(res.ok===true){
    
      setName("")
      setEmail("")
      setMessage("")
    }
    const {error}=await res.json()
    if(error){
      console.log(error)
      return
    }
  }
  return (
   <div className={styles.grid}>
  <style jsx>{`
    form {
      font-size: 1.2em;
    }

    label {
      display: block;
      margin-bottom: .2em;
    }

    input,
    textarea {
      width: 100%;
      padding: .8em;
    }

    button {
      color: white;
      font-size: 1em;
      background-color: blueviolet;
      padding: .8em 1em;
      border: none;
      border-radius: .2em;
    }
  `}</style>
  <form method="post" onSubmit={handleOnSubmit}>
    <p>
      <label htmlFor="name">Name</label>
      <input ref={nameRef} id="name" type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
    </p>
    <p>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </p>
    <p>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} />
    </p>
    <p>
      <button type="submit"></button>
    </p>
  </form>
</div>
  )
}
