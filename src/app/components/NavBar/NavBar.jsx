'use client'
import React from 'react'
import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    
    <nav className= {styles.container}>
        <Link href = '/' className={styles.link}> MY TODOS</Link>
        {/* <DarkModeToggle/> */}
        <Link className={styles.links} href = '/addTopic'>ADD TOPIC</Link>
       
     
    </nav>
    
  )
}

export default NavBar
