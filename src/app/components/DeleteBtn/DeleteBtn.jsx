'use client'
import { useRouter } from 'next/navigation';
// import React from 'react'
// import { HiOutlineTrash } from 'react-icons/hi'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from './DeleteBtn.module.css'

export default function DeleteBtn ({id})  {

  const router = useRouter();

  const removeTopic = async() => {
  
    const confirmed = confirm('Are you sure you want to delete?');

  if(confirmed) {
    const res = await fetch (`http://localhost:3000/api/topics?id=${id}`,
    {
      method: 'DELETE',
      })
      if (res.ok){
        router.push('/')
      }
      
    };
    console.log("hi")
  };

  return (

  <button onClick={removeTopic} className={styles.button} style={{ border: 'none', background: 'none' }}>
    <DeleteForeverIcon size = {28} />
  </button>
  )
}


