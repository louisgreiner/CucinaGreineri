import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Recipes from './Recipes/Recipes'
import Recipe from './Recipe/Recipe'

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Recipes />}/>
                <Route exact path='/recipes/:slug' element={<Recipe />}/>
            </Routes>
        </div>
    )
}

export default App