const button = document.querySelector("button");
button.addEventListener("click", createResult);

function createResult(){
    const quantity = document.querySelector(".Mycontainer div input");
    const ticketType = document.querySelector(".Mycontainer div:nth-child(2) select");
    const result = document.querySelector(".Mycontainer div:nth-child(3) input")
    
    let discount;
    discount = quantity.value >= 10 ? 0.9 : 1;
    if (ticketType.value === "adult"){
        result.value = quantity.value*350*discount +" Ft";
    }
    else{
        result.value = ` ${quantity.value*175*discount} Ft`;
    }

    
    /*
    result.value=ticketType.value=="adult"? `${quantity.value*350} Ft` : `${quantity.value*175} Ft`;
    */
    
}