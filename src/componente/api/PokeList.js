import styles from './PokeList.module.css'

import {useState , useEffect} from 'react';

import PokeCard from './PokeCard';

function PokeList() {

  const urlList = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

  const [removeLoad, setRemoveLoad] = useState(false)
  const [pokeList, setPokeList] = useState([])

  useEffect(() => {
    setRemoveLoad(true)
    setTimeout(() => {
      fetch(urlList, {
          method: "GET",
          headers: {"Content-type": "application/json"},
      })
      .then((resp) => resp.json())
      .then((data) => {
        setPokeList(data.results)
        setRemoveLoad(false)
      })
      .catch((err) => console.log('Erro encontrado', err))
    }, 300)

  }, [])   

  return (
    <div>
      {removeLoad ? 
        (<div>
          <h2 className={styles.message}>Ta saindo da jaula o monstro!!</h2>
        </div>) 
        :
        (<div  className={styles.pokeCard_container}>
          {pokeList.map(({name, url}) => { 
            return ( 
              <PokeCard key={url} name={name} url={url}/>
            )
          })}
        </div>)
      }
    </div>
  )
}

export default PokeList;