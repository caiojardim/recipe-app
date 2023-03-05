import styles from './RecipeModal.module.css'
import { X } from 'phosphor-react'
import React from 'react'

export function RecipeModal ({ recipe, handleCloseModal }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <header>
          <h1>{recipe.title}</h1>
          <button 
            title='fechar receita'
            onClick={handleCloseModal}
          >
            <X size={28} weight='bold'/>
          </button>
          
        </header>
        <main>
          <div className={styles.ingredients}>
            <h2>Ingredientes</h2>
              {recipe.content.ingredients.map(ingredients => {
              return (
                <React.Fragment key={ingredients.title}>
                  <h3>{ingredients.title}</h3>
                  <ul>
                    {ingredients.rows.map(row => {
                      return <li key={row}>{row}</li>
                    })}
                  </ul>
                </React.Fragment>
              )
            })}
          </div>

          <div className={styles.instructions}>
            <h2>Modo de Preparo</h2>
            {recipe.content.instructions.map(instruction => {
              return (
                <React.Fragment key={instruction.title}>
                  <h3>{instruction.title}</h3>
                  <ol>
                    {instruction.rows.map(row => {
                      return <li key={row}>{row}</li>
                    })}
                  </ol>
                </React.Fragment>
              )
            })}
          </div>
        </main>
        <footer></footer>
      </div>
    </div>
  )
}