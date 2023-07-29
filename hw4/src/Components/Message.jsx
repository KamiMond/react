import { createStyles } from "@mui/material";
import { useState } from "react";
import styles from './Message.module.css';
import { TextField, ThemeProvider, useTheme, createTheme, Button, Box, useForkRef, } from '@mui/material';
import PropTypes from 'prop-types'

export function Message({ addMessage }) {

  const [toggle, setToggle] = useState(false)

  const [text, setText] = useState('');

  const clickTextArea = (e) => {
    e.preventDefault()
    addMessage({ text, author: 'user' })
    setText('')
  }

  const clickButton = () => {
    setToggle(!toggle)
  }

  const changeText = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <h1>Message</h1>
      <h2 className={styles.heading}>Здравствуйте!</h2>
      <h3>Приятно познакомиться</h3>
      <button onClick={() => clickButton(!toggle)} >Кликните по кнопке</button>
      {toggle && <p>Меня зовут Марина! И это моё домашнее задание.</p>}

      <Box
        onSubmit={clickTextArea}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={text}
          onChange={changeText}
          autoFocus={true}
        />
        <br />
        <Button type='submit' variant="outlined" >Отправить</Button>
      </Box>

    </>

  )
}
Box.propTypes = {
  addMessage: PropTypes.func
}