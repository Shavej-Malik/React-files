<Navbar/> -> if we send anything from this type that is called props
<Navbar></Navbar> -> if we send anything from this type that is called children
console.log(props.children) -> accept children like this in Navbar
<h1>{props.children}</h1> -> print on screen like this
<h1>{props.children[0]}</h1> -> if we have more than one children
<!-- ----------------------------------------------------------- -->
.create a Context folder 
.wrap <App/> with <UserContext> 
  - <UserContext>
        <App />  <!-- Now App is Chidren of UserContext -->
  </UserContext>
.export const UserDataContext = createContext() -> this is main to provide data to any jsx file.Use export then we can access data in any jsx file
