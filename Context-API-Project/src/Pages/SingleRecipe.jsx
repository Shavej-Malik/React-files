import React, { useContext, useEffect  } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipeContext } from '../Context/RecipeContext'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipeContext)

  const navigate = useNavigate();
  const params = useParams()
  const recipe = data.find((recipe)=> params.id === recipe.id)
  // console.log(recipe)
  // console.log(data, params.id)
  const { register, handleSubmit, reset } = useForm(
    {defaultValues : {
      image: recipe?.image,
      title: recipe?.title,
      chef: recipe?.chef,
      ingredients: recipe?.ingredients,
      instructions: recipe?.instructions,
      desc: recipe?.desc,
      category: recipe?.category,
  }});
  const SubmitHandler = (recipe)=>{
  const Index = data.findIndex((recipe)=> params.id === recipe.id)
  const copyData = [...data]
  copyData[Index] = {...copyData[Index], ...recipe};
  setdata(copyData)
  localStorage.setItem("recipes", JSON.stringify(copyData))
  toast.success("Recipe Updated!")
  // console.log(Index)
  }

  const DeleteHandler = ()=>{
    const filterData = data.filter((recipe)=> recipe.id != params.id)
    setdata(filterData)
    toast.success("Recipe Deleted Successfully")
    navigate("/recipes")
    localStorage.setItem("recipes", JSON.stringify(filterData))
    // console.log(filterData)
  }

  useEffect(()=>{
      console.log("SingleRecipe.jsx Mounted")
      return ()=>{
        console.log("SingleRecipe.jsx Umounted")
      }
    },[]); 

  return recipe ? (
    <div className='w-full flex'>
      <div className="left w-1/2 p-5 m-3">
        <h1 className='font-bold text-2xl line leading-6 mb-3'>{recipe.title}</h1>
        <img className='h-[20vh]' src={recipe.image || null} alt="" />
        <h2>{recipe.chef}</h2>
        <p>{recipe.desc}</p>
      </div>
      
    <form className="right w-1/2 p-3" onSubmit={handleSubmit(SubmitHandler)} >
      <input className='block border-b outline-0 p-2'
      {...register("image")} type='url' placeholder='Enter image URL' />
      <input className='block border-b outline-0 p-2'
      {...register("title")} type='text' placeholder='Recipe Title' />
      <input className='block border-b outline-0 p-2'
      {...register("chef")} type='text' placeholder='Chef' />
      <textarea className='block border-b outline-0 p-2'
      {...register("ingredients")} type='discription' placeholder='write ingredients seprated by comma(,)'></textarea>
      <textarea className='block border-b outline-0 p-2'
      {...register("instructions")} type='discription' placeholder='write instruction seprated by comma(,)'></textarea>
      <select className='block border-b outline-0 p-2 text-black'
      {...register("category")} type='discription'>
        <option value="Category">Select Category</option>
        <option value="Category 1">🍔 American</option>
        <option value="Category 2">🍕 Italian</option>
        <option value="Category 3">🍜 Asian</option>
      </select>
      <button className='mt-5 mr-5 bg-amber-300 cursor-pointer active:scale-95 px-2 rounded-sm text-black font-bold'>Update Recipe</button>
      <button onClick={DeleteHandler} className='mt-5 mr-5 bg-red-500 cursor-pointer active:scale-95 px-2 rounded-sm text-black font-bold'>Delete Recipe</button>
    </form>

    </div>
  ) : " Data Not Found"
}

export default SingleRecipe