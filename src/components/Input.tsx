import React, { useState } from 'react'
import styles from './Input.module.sass'

interface Props {
  userInput: string
  setUserInput: (term: string) => void
}

export const Input = ({ userInput, setUserInput }: Props) => {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="search"
        value={userInput}
        onChange={e => {
          setUserInput(e.target.value)
        }}
      ></input>
    </>
  )
}
