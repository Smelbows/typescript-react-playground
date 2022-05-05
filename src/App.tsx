import { useState, useEffect } from 'react'
import styles from './App.module.sass'

import { Input } from './components/Input'
import { Media } from './components/Media'

import { MediaType } from './media'

const URL = 'https://itunes.apple.com/search'

export const App = () => {
  const [userInput, setUserInput] = useState<string>('')
  const [results, setResults] = useState<MediaType[]>([])

  useEffect(() => {
    fetch(URL + `?term=${userInput}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results)
        console.log(data.results)
      })
  }, [userInput])

  return (
    <div className={styles.root}>
      <header className={styles.header}>React Playground</header>
      <main className={styles.main}>
        <Input userInput={userInput} setUserInput={setUserInput} />
        <div className={styles.container}>
          {results.map(result => (
            <Media key={result.collectionId} media={result} />
          ))}
        </div>
      </main>
    </div>
  )
}
