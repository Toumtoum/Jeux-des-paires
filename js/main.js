//----------------------------Variables----------------------------------------

var card = document.getElementsByClassName('carte');

var colors = ['#5d8aa8','#d2691e','#efdecd','#9966cc','#008000','#00ffff','#4b5320','#5d8aa8','#d2691e','#efdecd','#9966cc','#008000','#00ffff','#4b5320']

var compareColor = [];

var click = 0;

//----------------------------Fonctions----------------------------------------

// @@@@@@@@@@@@@@@@@@@@@@@ GIVE A RANDOM COLOR TO EACH CARD @@@@@@@@@@@@@@@@@@@@@@@@

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

// @@@@@@@@@@@@@@@@@@@@@@@@@ SHOW THE BACKGROUND COLOR @@@@@@@@@@@@@@@@@@@@@@@@@@


function revealBackSide (){



  for (var i = 0; i < card.length ; i++){


    card[i].onclick = function(){

      if (click < 2){
      this.style.backgroundImage = 'url()';
      compareColor.push (this);
      click++;
      }
      // else if (click == 1){
      // this.style.backgroundImage = 'url()';
      // compareColor.push (this);
      // click++;
      //
      // }
      if (click == 2) {

        compare ();


      }
        console.log(compareColor[0]);
        console.log(compareColor[1]);
        console.log(click);
    };

  }
}
// @@@@@@@@@@@@@@@@@@@@@@@@@@@ COMPARE TWO CARD @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function compare (){


for (var i = 0; i < compareColor.length ; i++){


  if (compareColor[0].style.backgroundColor != compareColor[1].style.backgroundColor){

    compareColor[0].style.backgroundImage = 'url("../img/face.png")';
    compareColor[1].style.backgroundImage = 'url("../img/face.png")';
    compareColor = [];
    click = 0;
    alert('dommage');
  }

  else {


    compareColor = [];
    click = 0;
    alert('WOOHOO')

  }

}

}




//----------------------------Script----------------------------------------

schuffle (colors);
assignColor ();
revealBackSide ();
