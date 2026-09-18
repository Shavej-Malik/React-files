var h1=React.createElement('h1', {}, 'Hello From React')//Null is attribute like id,class null--> {id:'hero'}, {class:'hero'}
var container=document.querySelector('#container')
var root=ReactDOM.createRoot(container)
root.render(h1)