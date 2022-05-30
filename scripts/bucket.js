// On clicking remove button the item should be removed from DOM as well as localstorage.
 let cartdata = JSON.parse(localStorage.getItem('coffee'))
 console.log(cartdata)

 let total = cartdata.reduce(function(sum,ele,index,arr){
     return sum+Number(ele.price);
 },0)

 let container = document.getElementById('bucket')

 cartdata.map(function(el,index){
    let div = document.createElement('div')

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
    btn.innerText = 'Remove'
    btn.setAttribute('id','remove_coffee')
    btn.addEventListener("click",function(){
        removeitem(el,index)
    })

    div.append(img,type,price,btn)
    container.append(div)
 })

 function removeitem(el,index){
     cartdata.splice(index,1)

     localStorage.setItem("coffee",JSON.stringify(cartdata))
     window.location.reload();
 }