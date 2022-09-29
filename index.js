
function addTwo(x){
    return function(y){
        return x + y;
    }

}

function multiplyByTwo(x){
    return function(y){
        return x * y;
    }

}

const result = addTwo(2)
console.log(result)

function changeFont(size) {
    return function () {
        document.body.style.fontSize = size + 'px';
    }
}



const smallBtn = document.querySelector('.small');
const mediumBtn = document.querySelector('.medium');
const largeBtn = document.querySelector('.large');



smallBtn.addEventListener('click', function() {

   small()


    mediumBtn.addEventListener('click', function() {

    normal()
 
    })

    largeBtn.addEventListener('click', function() {

     big()
 
    })

})


const normal = changeFont(14);
const small = changeFont(12);
const big = changeFont(24);