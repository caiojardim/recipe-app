import styles from './Recipe.module.css'
import { RecipeModal } from './RecipeModal.jsx'

export function Recipe () {
  return (
    <div>
      <div className={styles.recipe}>
        <img 
          src="https://comidinhasdochef.com/wp-content/uploads/2020/02/Bolo-de-Cenoura-Tudo-Gostoso.jpg" 
          alt="bolo de cenoura" 
        />
        <div className={styles.info}>
          <span>Bolos</span>
          <strong>Bolo de cenoura com Cobertura de chocolate</strong>
          <button> Ver Receita</button>
        </div>
        <RecipeModal />
      </div>

      <div className={styles.recipe}>
        <img 
          src="https://img.itdg.com.br/tdg/images/recipes/000/031/593/318825/318825_original.jpg?mode=crop&width=710&height=400" 
          alt="Pudim" 
        />
        <div className={styles.info}>
          <span>Doces</span>
          <strong>Pudim</strong>
          <button>Ver Receita</button>
        </div>
      </div>
    </div>
  )
}