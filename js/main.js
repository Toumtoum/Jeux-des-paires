//----------------------------Variables----------------------------------------

var card = document.getElementsByClassName('carte');

var colors = ['#5d8aa8','#5d8aa8','#efdecd','#9966cc','#008000','#00ffff','#4b5320','#5d8aa8','#5d8aa8','#efdecd','#9966cc','#008000','#00ffff','#4b5320']

var randomColor;

//----------------------------Fonctions----------------------------------------

function revealBackSide (){

for (var i = 0; i < card.length ; i++){

  card[i].onclick = function(){

    this.style.backgroundImage = 'url()';

  };
}
}

function assignRandomColors () {

  randomColor = Math.floor(Math.random() * colors.length);
  

}




//----------------------------Script----------------------------------------

revealBackSide ()
assignRandomColors ()
