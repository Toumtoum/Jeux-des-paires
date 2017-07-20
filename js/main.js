//----------------------------Variables----------------------------------------

var card = document.getElementsByClassName('carte');

var colors = ['#5d8aa8','#d2691e','#efdecd','#9966cc','#008000','#00ffff','#4b5320','#5d8aa8','#d2691e','#efdecd','#9966cc','#008000','#00ffff','#4b5320']

var randomColor;

//----------------------------Fonctions----------------------------------------

function revealBackSide (){

for (var i = 0; i < card.length ; i++){

  card[i].onclick = function(){

    this.style.backgroundImage = 'url()';

  };
}
}

// function assignRandomColors () {
//
//   randomColor = colors[Math.floor(Math.random() * colors.length)];
//
//   for (var i = 0; i < randomColor.length ; i++){
//
//     card[i].style.backgroundColor = randomColor[i];
//
//   };
// }

 function schuffle (array){

  var i;
  var j;
  var temp;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function assignColor (){

  for (var i = 0; i < colors.length; i++) {

    card[i].style.backgroundColor = colors[i];

  }

}





//----------------------------Script----------------------------------------

revealBackSide ();
schuffle (colors);
assignColor ();
