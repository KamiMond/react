import { useState } from "react";
import styles from './Message.module.css';

export function Message(props) {
  const [name, setName] = useState('Олег')
  const [toggle, setToggle] = useState(false)

  const clickButton = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <h1>{props.title}</h1>
      <h2 className={styles.heading}>Здравствуйте {name}!</h2>
      <h3>Приятно познакомиться</h3>
      <button onClick={() => clickButton(!toggle)} >Кликните по кнопке</button>
      {toggle && <p>Я Марина, учусь с нуля. Это довольно не простая задача.</p>}
      <p>В сети Интернет пишут, что ключи в React нужны для
        фиксирования изменений, произошедших с элементами при перебирании массива. Key – это строковый атрибут.</p>
    </>

  )
}
