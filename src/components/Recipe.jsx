import { useState } from 'react'
import styles from './Recipe.module.css'
import { RecipeModal } from './RecipeModal.jsx'

import { recipes } from '../../recipes'

export function Recipe () {

  const [openModalID, setOpenModalID] = useState(0)

  function handleOpenModalButton(id) {
    setOpenModalID(id)
  }

  function closeOpenModal () {
    setOpenModalID(0)
  }

  return (
    <div> 
      {recipes.map(recipe => {
        return (
          <div className={styles.recipe} key={recipe.id}>
            <img 
              src={recipe.img}
              alt={recipe.title}
            />
            <div className={styles.info}>
              <span>{recipe.category}</span>
              <strong>{recipe.title}</strong>
              <button onClick={() => handleOpenModalButton(recipe.id)}>
                Ver Receita
              </button>
            </div>
            {recipe.id === openModalID ?
             <RecipeModal 
              recipe={recipe} 
              handleCloseModal = {closeOpenModal}
             /> :
             ''
            }
           
          </div>
        )
      })}
    </div>
  )
}