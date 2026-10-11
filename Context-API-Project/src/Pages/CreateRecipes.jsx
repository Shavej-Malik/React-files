import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid";
import { recipeContext } from '../Context/RecipeContext';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const CreateRecipes = () => {
  const navigate = useNavigate()
  const { data, setdata } = useContext(recipeContext)
  const { register, handleSubmit, reset } = useForm();
  const SubmitHandler = (recipe)=>{
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata))

    setdata([...data, recipe])
    toast.success("New Recipe Created")
    navigate("/recipes")
    reset()
  }
  return (
    <form onSubmit={handleSubmit(SubmitHandler)} >
      <input className='block border-b outline-0 p-2'
      {...register("image")} type='url' placeholder='Enter image URL' />
      <input className='block border-b outline-0 p-2'
      {...register("title")} type='text' placeholder='Recipe Title' />
      <input className='block border-b outline-0 p-2'
      {...register("chef")} type='text' placeholder='Chef' />
      <textarea className='block border-b outline-0 p-2'
      {...register("ingredients")} type='discription' placeholder='write ingredients seprated by comma(,)'></textarea>
      <textarea className='block border-b outline-0 p-2'
      {...register("instruction")} type='discription' placeholder='write instruction seprated by comma(,)'></textarea>
      <select className='block border-b outline-0 p-2 text-black'
      {...register("category")} type='discription'>
        <option value="Category">Select Category</option>
        <option value="Category 1">🍔 American</option>
        <option value="Category 2">🍕 Italian</option>
        <option value="Category 3">🍜 Asian</option>
      </select>
      <button className='mt-5 bg-amber-300 px-2 rounded-sm text-black font-bold'>Save Recipe</button>
    </form>
  )
}

export default CreateRecipes