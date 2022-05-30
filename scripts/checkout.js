let id; 
function chekout(event){
    event.preventDefault()
    alert("Your order is accepted ")

    const mytimeout =setTimeout(mygreeting,3000)

    function mygreeting(){
        alert("Your order is being Prepared ")
    }

    function mystopfunction(){
        clearInterval(mytimeout)
    }

    const transit = setTimeout(transitfood,8000)
    function transitfood(){
        alert("Your order is being packed ")
    }
    function mystopfunction(){
        clearInterval(transit)
    }

    const delivery = setTimeout(deliveryfood,10000)
    function deliveryfood(){
        alert("Your order is out for delivery ")

    }
    function mystopfunction(){
        clearInterval(delivery)
    }
    const deliverd = setTimeout(deliverdedfood,12000)
 function deliverdedfood(){
     alert("")
 }
 function mystopfunction(){
     clearInterval(deliverd)
 }
}