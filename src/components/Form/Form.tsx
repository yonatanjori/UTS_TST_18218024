import React, { ReactElement, useState } from 'react'
import styles from './Form.module.scss'
import SweetAlert from 'sweetalert2-react';
import axios from 'axios'

const Form = () : ReactElement => {
  const [name, setName] = useState<string>('')
  const [first, setFirst] = useState<string>('')
  const [middle, setMiddle] = useState<string>('')
  const [last, setLast] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)

  const postData = async (first : string, middle : string, last : string) =>{
    const payload = {
      first,
      middle,
      last
    }

    const { data : { name }} = await axios.post('https://function-uts-tst-18218024.azurewebsites.net/api/AddMessage?code=RVwHZu6SgmRCRaSsUILKLS3T7IyOkc9OT1nuPKrBIWDsXLi8Iz6XUg==', payload)
    
    setName(name)
    setFirst('')
    setMiddle('')
    setLast('')
    setShow(true)
    
  }
  
  return (
    <React.Fragment>
      <div className={styles.container}>
      <div className={styles.welcome}>
        Wilujeng Sumping { name }!
      </div>
      <div  className={styles.formContainer}>
        <div className={styles.field}>
          <div className= {styles.title}>
            Nama Pertama
          </div>
          <input type="text" value={first} className={styles.input} onChange={(e) => setFirst(e.target.value)}/>
        </div>
        <div className={styles.field}>
          <div className= {styles.title}>
            Nama Tengah
          </div>
          <input type="text" value={middle} className={styles.input} onChange={(e) => setMiddle(e.target.value)}/>
        </div>
        <div className={styles.field}>
          <div className= {styles.title}>
            Nama Akhir
          </div>
          <input type="text" value={last} className={styles.input} onChange={(e) => setLast(e.target.value)}/>
        </div>
        <div className={styles.btn} onClick={() => postData(first, middle, last)}>
          Call API !
        </div>
      </div>
    </div>
    <SweetAlert
      show={show}
      title= {`Wilujeng Sumping Deui ${name}!`}
      onConfirm={() => setShow(false)}
    />
    </React.Fragment>
  )
}

export default Form
