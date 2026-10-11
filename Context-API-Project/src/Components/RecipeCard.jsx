import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    const { id, image, title, desc, chef } = props.recipe;
  return (
        <Link 
            to={`/recipes/detail/${id}`} 
            className='duration-500 hover:scale-105 mr-2 mb-3 block w-[23vw] rounded overflow-hidden'>
            <img className='object-cover w-full h-[50vh]' src={image} alt="" />
            <h1 className='font-bold mt-2'>{title}</h1>
            <small>{chef}</small>
            <p>
                {desc?.slice(0, 100)}...{" "}
                <small className='text-blue-400'>More </small>
            </p>
        </Link>
  )
}

export default RecipeCard