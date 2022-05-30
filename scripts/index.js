// Add the coffee to local storage with key "coffee"
const url ="https://masai-mock-api.herokuapp.com/coffee/menu"
let cartdata = JSON.parse(localStorage.getItem('coffee')) || []
fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    // console.log(res.menu.data)
     appenddata(res)
})
.catch(function(error){
    console.log('Error:',error)
})

let container = document.getElementById('menu')

function appenddata(res){
res.menu.data.forEach(function(el){

let div = document.createElement('div')
div.setAttribute('class','cofapp')

let img = document.createElement('img')
img.src=el.image;
img.setAttribute('class','img')

let type = document.createElement("p")
type.innerText = el.title;
type.setAttribute('class','center')

let price = document.createElement("p")
price.innerText = el.price;
price.setAttribute('class','center')

let btn = document.createElement('button')
btn.innerText = 'Add To Bucket'
btn.setAttribute('id','add_to_bucket')
btn.addEventListener('click',function(){
    addtocart(el)
})
div.append(img,type,price,btn)

container.append(div)
    })

    function addtocart(el){
        console.log(el)
        cartdata.push(el)
        localStorage.setItem('coffee',JSON.stringify(cartdata));
        
        document.querySelector("coffee_count").innerText = cartdata.length;
    }
}

