import styles from './Header.module.css'
import { List } from 'phosphor-react'

export function Header () {
  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Top Receitas</h1>
        <List size={30}/>
      </div>
    </header>
  )
}