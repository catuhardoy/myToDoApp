import React from 'react'
import Link from 'next/link'

import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    
    <nav className= {styles.container}>
        <Link href = '/' className={styles.link}> MY TODOS</Link>
        
        <Link className={styles.links} href = '/addTopic'>Add Topic</Link>
       
     
    </nav>
    
  )
}

export default NavBar
