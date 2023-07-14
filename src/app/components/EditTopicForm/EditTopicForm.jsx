
'use client'
import styles from './EditTopicForm.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function EditTopicForm ({id, title, description}) {
  
  const  [newTitle, setNewTitle ] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();


  const handleSubmit =  async (e) =>{
    e.preventDefault()

    try {
      const res = await fetch (`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
      },
      body: JSON.stringify({newTitle, newDescription})
    })

    if (!res.ok){
      throw new Error ('Failed to update topic')
    }
  
    router.push('/')

    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    
    <div className={styles.container}>
      <h1 className={styles.title}>EDIT TOPIC!</h1>
        <form onSubmit={handleSubmit} className={styles.form}>

            <input 
            onChange={(e)=> setNewTitle (e.target.value)}
            value = {newTitle}
              className={styles.input}
             type="text" 
             placeholder='Title' />


            <input 
            onChange={(e)=> setNewDescription (e.target.value)}
            value = {newDescription}
            className={styles.input} 
            type="text" 
            placeholder='Description' />
            
            
            <button className={styles.btn} type = "submit" > EDIT</button>
        </form>

    </div>
    
  )
}


