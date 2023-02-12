import styles from './Home.module.css'
import { Recipe } from '../components/Recipe'

export function Home () {
  return (
    <main className={styles.home}>
      <Recipe />
    </main>
  )
}