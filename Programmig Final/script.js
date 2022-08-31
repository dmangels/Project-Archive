var userName; //At the start
function begin(){  
  window.location.href ='firstpage.html';
}

function darkalley(){  
  window.location.href ='darkalley.html';
}

function fight(){  
  window.location.href ='fight.html';
}

function run(){  
  window.location.href ='run.html';
}

function takeKnife(){  
  window.location.href ='takeknife.html';
}

function leaveKnife(){  
  window.location.href ='leaveknife.html';
}

function sidewalk(){
  window.location.href ='sidewalk.html';
}

function tellPassword(){ //The password screen
  var input = document.getElementById('password');
  if (input.value == "Banana" || "banana"){
    alert (input.value) 
  }
  if (input.value != "Banana" || "banana"){
    alert ("Wrong Password") 
  }
}

function stabOfficer(){
  window.location.href ='stabOfficer.html';
}

function stabSelf(){
  window.location.href ='stabself.html';
}

function ponder(){
  window.location.href='ponder.html';
}