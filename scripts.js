plook = 1;
var dusk = 0;

var mushroom_audio = new Audio('audio/mushroom.wav');
var grass_audio = new Audio('audio/grass.wav');
var dragon_audio = new Audio('audio/dragon.wav');

var duskPoses = Array("images/characters/dusk2.png", "images/characters/dusk1.png", "images/characters/dusk3.png", "images/characters/dusk4.png", "images/characters/dusk5.png");



function plookClick() {
    if (plook == 1){
        document.getElementById("plookClickable").src = "images/characters/plook1.gif";
        plook = 2;
    }
    else{
        document.getElementById("plookClickable").src = "images/characters/plook2.gif";
        plook = 1;
    }
}

function mushroomClick() {
    document.getElementById("mushroom").src = "images/characters/mushroom.webp";
    mushroom_audio.play();
}

function grassClick() {
    document.getElementById("grass").src = "images/characters/grass.webp";
    grass_audio.play();
}

function grassClick2() {
    document.getElementById("grass2").src = "images/characters/grassAgain.webp";
    grass_audio.play();
}

function dragonClick() {
    document.getElementById("dragon").className = "characterDragonFly";
    document.getElementById("dragon").src = "images/characters/dragon.webp";
    dragon_audio.play();
    
    
}


function duskClick() {
    //dusk = dusk + 1
    //if (dusk > duskPoses.length - 1){
     //   shuffle(duskPoses)
      //  dusk = 0
    //}
    //document.getElementById("dusk").src = duskPoses[dusk];
    

    if (dusk == 0){
        document.getElementById("dusk").src = "images/characters/dusk5.webp"
        dusk = 1;
    }
    else{
        document.getElementById("dusk").src = "images/characters/dusk2.webp";
        dusk = 0;
    }
    

}


function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }



function castStomp() {
    document.getElementById("castName").innerHTML = "Stomp";
    document.getElementById("castBio").innerHTML = "An impulsive and energetic young nubkin from Roseville who's always dreamed of adventure. After stumbling upon the Miracle Sword, he immediately seizes the opportunity before he has time to think things through.";
    document.getElementById("castFood").innerHTML = "Favourite food: &ensp; Spaghetti";
    

    document.getElementById("castStomp").className = "castImgCurrent";
    document.getElementById("castStomp").src = "images/cast/stomp.webp";

    document.getElementById("castHooligrin").className = "castImg";
    document.getElementById("castHooligrin").src = "images/cast/hooligrin.png";

    document.getElementById("castThunderkin").className = "castImg";
    document.getElementById("castThunderkin").src = "images/cast/thunderkin.png";

    document.getElementById("castDusk").className = "castImg";
    document.getElementById("castDusk").src = "images/cast/dusk.png";

    document.getElementById("castBday").innerHTML = "Birthday: &ensp; March 7";
}

function castThunderkin() {
    document.getElementById("castName").innerHTML = "Thunderkin";
    document.getElementById("castBio").innerHTML = "A comic-loving kid who was given electric superpowers by the Duskman in return for serving him. Claims to be evil, but doesn't seem to be doing a very good job at it.";
    document.getElementById("castFood").innerHTML = "Favourite food: &ensp; Mac and cheese";
    

    document.getElementById("castStomp").className = "castImg";
    document.getElementById("castStomp").src = "images/cast/stomp.png";

    document.getElementById("castHooligrin").className = "castImg";
    document.getElementById("castHooligrin").src = "images/cast/hooligrin.png";

    document.getElementById("castThunderkin").className = "castImgCurrent";
    document.getElementById("castThunderkin").src = "images/cast/thunderkin.webp";

    document.getElementById("castDusk").className = "castImg";
    document.getElementById("castDusk").src = "images/cast/dusk.png";

    document.getElementById("castBday").innerHTML = "Birthday: &ensp; April 19";
}

function castHooligrin() {
    document.getElementById("castName").innerHTML = "Hooligrin";
    document.getElementById("castBio").innerHTML = "A strange figure wearing a creepy mask seen lurking ominously around the forest outside Roseville. He's freed the Duskman in order to make a deal with him...";
    document.getElementById("castFood").innerHTML = "Favourite food: &ensp; <i>Declined to answer</i>";
    

    document.getElementById("castStomp").className = "castImg";
    document.getElementById("castStomp").src = "images/cast/stomp.png";

    document.getElementById("castHooligrin").className = "castImgCurrent";
    document.getElementById("castHooligrin").src = "images/cast/hooligrin.webp";

    document.getElementById("castThunderkin").className = "castImg";
    document.getElementById("castThunderkin").src = "images/cast/thunderkin.png";

    document.getElementById("castDusk").className = "castImg";
    document.getElementById("castDusk").src = "images/cast/dusk.png";

    document.getElementById("castBday").innerHTML = "Birthday: &ensp; <i>Declined to answer</i>";
}


function castDusk() {
    document.getElementById("castName").innerHTML = "The Duskman";
    document.getElementById("castBio").innerHTML = "He was sealed in time eons ago, but now that he's back, the Duskman is itching to spread some good old fashioned chaos. Rarely one to take things seriously, he plans to have an absolute blast as he tears the world apart.";
    document.getElementById("castFood").innerHTML = "Favourite food: &ensp; Charcoal flames and worms";
    

    document.getElementById("castStomp").className = "castImg";
    document.getElementById("castStomp").src = "images/cast/stomp.png";

    document.getElementById("castHooligrin").className = "castImg";
    document.getElementById("castHooligrin").src = "images/cast/hooligrin.png";

    document.getElementById("castThunderkin").className = "castImg";
    document.getElementById("castThunderkin").src = "images/cast/thunderkin.png";

    document.getElementById("castDusk").className = "castImgCurrent";
    document.getElementById("castDusk").src = "images/cast/dusk.webp";

    document.getElementById("castBday").innerHTML = "Birthday: &ensp; ☍29☉1.43☋ ★";
    
}

