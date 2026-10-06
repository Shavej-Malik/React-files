React Router DOM

 - install react-router-dom "npm i react-router-dom"
 - in main.jsx "import { BrowserRouter } from 'react-router-dom'"
 - wrap <App/> by BrowserRouter in main.jsx file
 - In App.jsx file :- 
    ."import { Route, Routes } from 'react-router-dom'"
    .make <Routes>(collection of Route) and make <Route/> inside <Routes></Routes>
    . <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
 - in <Route/> mention path(where to go) and elemnts (what to render)
    .{<a href="/">Home Page</a>
     <a href="/about">About Page</a>
     <a href="/product">Product Page</a>} // using of <a></a> tag Page reload on every rendering.This tag redirect on page
In Navbar :-
    .{<Link to={'/'} >Home</Link>
     <Link to={'/about'} >About</Link>
     <Link to={'/product'} >Product</Link>}//use <Link></Link> tag intead of <a></a> tag.Because page do not reload on every Route

 - Nested Route can be made by writing this way - path="/product/men"
 - Dynamic Route can be made by writing this way - path="/product/:id"
 - you can access id by using useParams Hook⬇️ inside that element  you rendered in a Dynamic route
{const param = useParams()
  console.log(param) } we can get id of any Dynamic Route