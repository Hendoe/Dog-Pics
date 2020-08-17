'use strict'

function getDogs() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

function listenSubmit() {
    $('form').submit(event => {
      event.preventDefault();
      getDogs();
    });
  }

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


//
/**
 * function
 * 
 * 
 */

$(function() {
    console.log('Preparing your dogs...');
    listenSubmit();
});