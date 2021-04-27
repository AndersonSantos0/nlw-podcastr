import React, { useEffect, useState } from 'react'
import usePersistedState from '../utils/usePersistedState'

import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player'
import GlobalStyles from '../styles/global'
import PlayerContextProvider from '../contexts/PlayerContext'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('theme', light)

  const ToggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <Header toggleTheme={ToggleTheme} />
            <Component {...pageProps} />
            <GlobalStyles />
          </main>
          <Player/>
        </div>
      </PlayerContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
