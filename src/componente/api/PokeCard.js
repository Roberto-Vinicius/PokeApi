import styles from './PokeCard.module.css';

import {useState, useEffect} from 'react';

function PokeCard({name, url}) {
  
  const [PokeDice, setPokeDice] = useState([]);
  const [PokeType, setPokeType] = useState([]);

  useEffect(() => {
    fetch(url, {
        method: "GET",
        headers: {"Content-type": "application/json"},
      })
      .then((resp) => resp.json())
      .then((data) => {
        setPokeDice(data)
        setPokeType(data.types)
      })
      .catch((err) => console.log('Erro encontrado', err))

  }, []) 

  // const filteredPoke = Search.researched.length > 0 ? PokeDice.name.filter(pokeFilter => console.log(pokeFilter.name.incluse(Search.researched))) : [];



  return (
    <div className={styles.pokeCard_container}>
      <div className={styles.pokeCard}>
        <div className={styles.id}>
          # {PokeDice.id}
        </div>
        <div>
          {<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${PokeDice.id}.gif`}/>}
        </div>
        <div>
          <h2>{name}</h2>
        </div>
        <div className={styles.types}>
          {PokeType.map((types, index) => {
            return (
              <div key={index} className={`${styles[types.type.name]}`}>
                {types.type.name}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PokeCard;