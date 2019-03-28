/* eslint-disable no-undef */
'use strict';

// function heroHtmlBuilder

function main() {
  $('.thumbnail').on('click', event => {
    console.log(event.which);
    console.log(event.type);

    const targetImg = $(event.target);
    console.log(targetImg);
    console.log($(targetImg).attr('src'));
    
    $('.hero > img').attr('src', $(targetImg).attr('src'));
  });

  // $('.thumbnail').keypress( event => {
  //   console.log(event.which);
  //   console.log(event.type);

  //   // if()
  //   const targetImg = $(event.target.img);
  //   console.log(targetImg);
  // });
}

$(main);