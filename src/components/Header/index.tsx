import React, { useContext } from 'react'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './styles.module.scss'
import Link from 'next/link'
import { ThemeContext } from 'styled-components'
import DarkModeSwitcher from '../DarkModeButton'

interface HeaderProps {
  toggleTheme: () => void
}

export const Header: React.FC<HeaderProps> = ({toggleTheme}) => {

  const { title } = useContext(ThemeContext)

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return (
    <header className={styles.headerContainer}>
      <Link href={'/'}>
        <img src="/logo.svg" alt="Podcastr" />
      </Link>
      <p>O melhor para você ouvir sempre {title} </p>
      <div>
        <span>{currentDate}</span>
        <DarkModeSwitcher theme={title} toggleTheme={toggleTheme} />
      </div>
    </header>
  )
}
