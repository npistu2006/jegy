const button = document.querySelector("button");
button.addEventListener("click", createResult);

const type = 
{
    "adult" : 350,
    "student" : 175,
    "retired" : 100,
    "animal" : 75,
}

function createResult(){
    const quantity = document.querySelector(".Mycontainer div input");
    const ticketType = document.querySelector(".Mycontainer div:nth-child(2) select");
    const result = document.querySelector(".Mycontainer div:nth-child(3) input");
    
    let discount;
    discount = quantity.value >= 10 ? 0.9 : 1;


    if(ticketType.value === "animal" && quantity.value >1){
        quantity.value = ""
        quantity.focus();  //Amikor több állatot írnak be akkor a quantity.value értéke üres szting lesz. Mégis működik a szorzás, mert "" --> 0 lesz (inplicit konverzió!)
        discount = 1;
        alert("Nem.");
    }

    result.value = quantity.value * discount * type[ticketType.value];
    /*
    if (ticketType.value === "adult"){
        result.value = quantity.value*350*discount +" Ft";
    }
    if (ticketType.value === "retired"){
        result.value = quantity.value*100*discount +" Ft";
    }
    else{
        result.value = ` ${quantity.value*175*discount} Ft`;
    }
    */

    
    /*
    result.value=ticketType.value=="adult"? `${quantity.value*350} Ft` : `${quantity.value*175} Ft`;
    */
    
}