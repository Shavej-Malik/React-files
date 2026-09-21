import box from './app.js'

var h1=React.createElement('h1',{id:'hero'},'Hello I am Shavej Malik')
var h2=React.createElement('h2',{},'Hey, How are you?')
var div=React.createElement('div',{id:'parent'},[h1,h2,box])
var root=ReactDOM.createRoot(document.querySelector('#container'))
root.render(div)