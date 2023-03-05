import styles from './Header.module.css'
import { Cake, List } from 'phosphor-react'

export function Header () {
  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Cake size={36}/>
          <h1>Top Receitas</h1>
        </div>
        <List size={30}/>
      </div>
    </header>
  )
}