// var form = document.querySelector('form');
// form.addEventListener('submit',function(){
//     console.log("Submited"); // After submit auto matically reloaded. this is the default effect of form
// })

var form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();//use this to prevent of default effect
    console.log("Submited"); 
})

// var arr=[10,20,30,40]
// arr.splice(1,2)// remove 20 because index is first and element one
// console.log(arr)

// localStorage.clear()
localStorage.setItem('user','Shavej Malik')// user -> key  shavej Malik -> value. if we remove this line then sroed in local Storage.
var user=localStorage.getItem('user')
// console.log(user)

var obj={
    user:"Shavej",
    age:21,
    city:"Saharanpur"
}

var newObj=JSON.stringify(obj)

//localStorage.setItem("user",obj)//This is store only obj not data
localStorage.setItem("user",newObj)//This is store obj with data
// console.log(localStorage.getItem("user"))//now data got in JSON form
//But we can get in the object form then..............
var obj = localStorage.getItem('user')
var realObj = JSON.parse(obj)
console.log(realObj)