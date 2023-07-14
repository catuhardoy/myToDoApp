'use client'
// import React from 'react'
import styles from './page.module.css'
import {useState} from 'react'
import {useRouter} from 'next/navigation'

export default function AddTopic () {
  // console.log('holi')

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter()

  const hanldleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert ('Title and description are required');
      return;
    };

    try{
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({title, description})
      });

      if(res.ok){
        router.push('/');
        console.log('created')
      }else{
        throw new Error ('Failed to create topic')
      }

    }catch(error){
      
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ADD NEW!</h1>
    <form onSubmit = {hanldleSubmit} className={styles.form}>
        
        <input
        onChange={(e) => setTitle(e.target.value)} 
        value = {title}
        className={styles.input} 
        type="text" 
        placeholder='Title'
        id= 'title'
        
        />


        <input 
        onChange={(e) => setDescription(e.target.value)} 
        value = {description}
        className={styles.input} 
        type="text" 
        placeholder='Description'
        id= 'description' 
        />
        
        
        <button className={styles.btn} 
                type = "submit" > 
        
        ADD</button>
    </form>


    </div>
  )
}


