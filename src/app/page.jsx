import Image from 'next/image'
import styles from './page.module.css'
import TopicsList from './components/TopicsList/TopicsList';
import img from '../../public/pexels-ameruverse-digital-marketing-media-1643416.jpg'
//'use client'


export default function Home() {
  return (

   <div className={styles.container}>
    {/* <div className={styles.imageContainer}>
      <Image src = {img} alt="Image" width={500} height={300}></Image>
      
      </div>  */}
   <TopicsList/>
   </div>
  )
}
