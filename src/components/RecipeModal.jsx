import styles from './RecipeModal.module.css'

export function RecipeModal () {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <header><h1>Bolo de cenoura com cobertura de chocolate</h1></header>
        <main>
          <div className={styles.ingredients}>
            <h2>Ingredientes</h2>
              <h3>MASSA</h3>
              <ul>
                <l1>1/2 xícara (chá) de óleo</l1>
                <l1>3 cenouras médias raladas</l1>
                <l1>4 ovos</l1>
                <l1>2 xícaras (chá) de açúcar</l1>
                <l1>2 e 1/2 xícaras (chá) de farinha de trigo</l1>
                <l1>1 colher (sopa) de fermento em pó</l1>
              </ul>
              <h3>COBERTURA</h3>
              <ul>
                <l1>1 colher (sopa) de manteiga</l1>
                <l1>3 colheres (sopa) de chocolate em pó</l1>
                <l1>1 xícara (chá) de açúcar</l1>
                <l1>1 xícara (chá) de leite</l1>
              </ul>
          </div>
          <div>
            <h2>Modo de Preparo</h2>
            <p>
              MASSA
              Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.

              Acrescente o açúcar e bata novamente por 5 minutos.

              Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.

              Acrescente o fermento e misture lentamente com uma colher.

              Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.

              COBERTURA
              Despeje em uma tigela a manteiga, o chocolate em pó, o açúcar e o leite, depois misture.

              Leve a mistura ao fogo e continue misturando até obter uma consistência cremosa, depois despeje a calda por cima do bolo.
            </p>
          </div>
        </main>
        <footer></footer>
      </div>
    </div>
  )
}