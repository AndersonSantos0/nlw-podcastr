import React, { useEffect, useState } from 'react'

import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player'
import PlayerContextProvider from '../contexts/PlayerContext'

function MyApp({ Component, pageProps }) {

  const [bottomMode, setBottomMode] = useState(false)

  useEffect(() => {
    setBottomMode(window.innerWidth <= 1024)
    window.addEventListener('resize', () => setBottomMode(window.innerWidth <= 1024))
    return () => window.removeEventListener('resize', () => {})
}, [])

  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player bottom={bottomMode} />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp
