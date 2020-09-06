'use strict'
//${num}
function getDogs() {
    fetch(`https://dog.ceo/api/breeds/image/random`)
        
        //for (let i = 0; i < response.length; i++) {
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                renderDogs(responseJson);
            });
       // }
};

 function renderDogs(responseJson) {
    let dogs = `<img src='${responseJson.message}' alt="Dogs"/>`
    $('.pics').html(dogs)
};

function listenSubmit() {
    $('form').submit(event => {
      event.preventDefault();
      getDogs();
    });
};

//controls how many dogs getDogs() returns
/**
 * function howManyDogs() {
 *  let x = num
 * 
 *  getDogs();
 *  getDogs();
 *  getDogs();
 * }
 */

$(function() {
    console.log('Preparing your dogs...');
    listenSubmit();
});