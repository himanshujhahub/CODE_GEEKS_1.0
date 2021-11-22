function underLine(e){
    console.log(e.parentNode);
    let parent = e.parentNode;
    parent.style = "border-bottom:2px solid red;width:25%;"
}

function updateItm(){
    let itm = parseInt(document.getElementById("itm").innerHTML);
    itm+=1;
    document.getElementById("itm").innerHTML=itm;
    alert("item added to the cart");
}

function modelItem(){
    let itm = document.getElementById("itm");
    let modelItm = document.getElementById("modelItem");
    modelItm.innerHTML = itm.innerHTML;
    console.log(modelItm.innerHTML);
}