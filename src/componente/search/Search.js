import styles from './Search.module.css';

import  { useState } from 'react';

function Search(props) {

    const [researched, setResearched] = useState('');
    const {onSearch} = props

    const handleChange = (e) => {
        setResearched(e.target.value);
        if(e.target.value === 0) {
            onSearch(undefined)
        }
    }

    function onButtonSearch() {
        onSearch(researched)
    }
    
    return (
        <div className={styles.search_container}>
            <input
                placeholder="Buscar Pokemon"
                onChange={handleChange}
            />
            <div className={styles.search_btn}>
                <button onClick={onButtonSearch}>Buscar</button>
            </div>
        </div>        
    )  
}

export default Search;