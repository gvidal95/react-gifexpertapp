import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {
    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () =>{
    //     // const categoriesAux = categories.concat('spiderman');
    //     // setCategories(categoriesAux);
    //     // setCategories([...categories, 'HusterXHunter']);
    //     setCategories(cats => [...cats, 'HunterXHunter']); //El argumento cats es el valor del estado anterior
    // };


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map( category => 
                       <GifGrid
                            key={category} 
                            category={category}/>
                    )
                }
            </ol>
        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp
