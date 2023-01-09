let opencart = document.querySelector('#icon-cart');
let cartbag = document.querySelector('.side-cart');
let closecart = document.querySelector('#close-cart');



opencart.addEventListener('click', function(){
    cartbag.classList.add('active');
})

closecart.addEventListener('click', function(){
    cartbag.classList.remove('active');
})

// --------cart remove------------------



if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}


function ready(){
    var removeCartButton = document.querySelector('.fa-trash');
    console.log(removeCartButton);
    for(let i=0; i< removeCartButton.length ; i++){
        var button = removeCartButton[i];
        button.addEventListener('click', removeCartItem);
    }

}
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}

