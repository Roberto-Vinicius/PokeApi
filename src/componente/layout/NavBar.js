import styles from './NavBar.module.css'


function NavBar() {

    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
        <nav className={styles.NavBar_container}>
            <img alt="PokéAPI" src={logoImg}></img>
        </nav>
    )
}

export default NavBar;