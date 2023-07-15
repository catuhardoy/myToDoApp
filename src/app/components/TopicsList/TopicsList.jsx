
import styles from './TopicsList.module.css'
import Link from 'next/link'
import DeleteBtn from '../DeleteBtn/DeleteBtn'
import EditIcon from '@mui/icons-material/Edit';


//funcion para traer los topics, conecto con base de datos
async function getTopics () {
  // 'use server'

    try{
        const res = await fetch('http://localhost:3000/api/topics',{
            cache: 'no-store'
        });
        // console.log(getTopics())

        if(!res.ok){
            throw new Error ("failed to get topics")
        }

        return res.json();
    }catch (error){
    
        console.log('Error loading topics', error);
        return { topics: [] }
    }
};

export default async function TopicsList () {

const {topics} = await getTopics() || { topics: [] };
console.log(topics)

  return (

    <div className={styles.container}>
      
   {topics?.map((t) => (
    <div key={t._id}  className={styles.topics}>
        
      <div  className={styles.innerContainer}>
        <h2 className={styles.title}>{t.title}</h2>
        <div>
            <p className={styles.description}>{t.description}</p>
        </div>
        </div>
        <div className={styles.btn}>  
        <DeleteBtn id = {t._id}/>
        <Link href = {`/editTopic/${t._id}`}>
            < EditIcon size={26}/>
        </Link>
        </div>
    </div>
  ))}  
    </div>  
  )
}



