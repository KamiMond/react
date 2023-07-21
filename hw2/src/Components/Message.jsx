import { useState } from "react";
import styles from './Message.module.css';

export function Message(props) {
  const [name, setName] = useState('Олег')
  const [toggle, setToggle] = useState(false)

  const clickButton = () => {
    setToggle(!toggle)
  }
  const changeName = () => {
    console.log(setName)
  }
  return (
    <>
      <h1>{props.title}</h1>
      <h2 className={styles.heading}>Здравствуйте!</h2>
      <h3>Приятно познакомиться</h3>
      <button onClick={() => clickButton(!toggle)} >Кликните по кнопке</button>
      {toggle && <p>Я Марина, учусь с нуля. Это довольно не простая задача.</p>}
    </>

  )
}
