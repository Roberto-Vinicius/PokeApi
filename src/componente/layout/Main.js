import styles from './Main.module.css'

import PokeList from '../api/PokeList'

function Main() {
  return (
    <main className={styles.mainContainer}>
      <h1>Pokemons de Kanto</h1>
      <PokeList />
    </main>
  )
}

export default Main;