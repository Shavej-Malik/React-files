import React from 'react'
import { useContext } from 'react'
import { recipeContext } from '../Context/RecipeContext'
import RecipeCard from '../Components/RecipeCard'

const Recipes = () => {
  const { data } = useContext(recipeContext)
  const renderRecipe = data.map((recipe) => 
    <RecipeCard key={recipe.id} recipe={recipe} />
  )
  return (
    <div className='flex flex-wrap'>{renderRecipe}</div>
  )
}

export default Recipes