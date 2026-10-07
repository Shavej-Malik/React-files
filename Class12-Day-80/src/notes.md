-> react -> create Single page application (URL change hone pe kusch nhi hota tha)
-> React-Router-DOM solve this problem

Types of Router :- 

 - BrowserRouter (use 99.9% in React)
  - History API
  - URL Clean
  - Modern Apps
  - Good SEO
  - Need Server Configuration
 - Hash Router
  - contains - /courses/#/about
  - use in Old Browser
  - No SEO
  - Ugly URL
 - Memory Router
  - React Native
 - Static Router
  - used in server side rendering

Routes -> Container of Route
Route -> if path is /x then show y

<!-- ------------------------------------------------- -->

style={({isActive})=>({
         color:isActive ? 'red' : 'white'
       })}
  - style={...} -> Iske andar hum JavaScript likhte hain,  isliye {} lagate hain.
  - ({ isActive }) => -> Ye ek arrow function hai.
  - Lekin NavLink hume object deta hai
  - {isActive} -> Hum sirf "isActive" chahte hain, isliye object destructuring karte hain
  - () => ({
      color: "red"
    }) Yahaan () ka matlab hai -> "Iske andar jo hai wo object hai."

