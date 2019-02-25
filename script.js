let footer = document.getElementsByTagName('footer');
footer[0].addEventListener('click', function(){
  console.log("clique");
});
let i = 1
footer[0].addEventListener('click', function(){
  console.log(`clique numéro ${i}`);
  i++;
});



document.getElementsByTagName("button")[0].onclick = function() {myFunction2()};

function myFunction2() {


document.getElementById("navbarHeader").classList.toggle("collapse");

}

document.getElementsByTagName("button")[0].dblclick = function() {myFunction3()};

function myFunction3() {


document.getElementById("navbarHeader").classList.toggle("collapse");

}



let firstCardText = document.getElementsByClassName('card-text')[0];
let editButton = document.querySelectorAll('.btn-outline-secondary')[0];
editButton.addEventListener('click', function() {
  firstCardText.style.color = 'red';
});

let editSecondCardButton = document.querySelectorAll('.btn-outline-secondary')[1];
let secondCardText = document.getElementsByClassName('card-text')[1];
let textColorStatus = 'normal'; 

editSecondCardButton.addEventListener('click', function(){
  if (textColorStatus == 'normal') { 
    secondCardText.style.color = 'green';
    textColorStatus = 'green'; 
  } else if (textColorStatus == 'green'){ 
    secondCardText.style.color = '';
    textColorStatus = 'normal';
  }
});

let navBar = document.getElementsByTagName('header')[0];
let bootStrapStyleSheet = document.getElementsByTagName('link')[0];
let styleStatus = 'bootstrap';

navBar.addEventListener('dblclick', function() {
  if (styleStatus == 'bootstrap'){
    bootStrapStyleSheet.href = '';
    styleStatus = 'none';
  } else if (styleStatus == 'none'){
    bootStrapStyleSheet.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    styleStatus = 'bootstrap';
  }
})
function functionOne() {
  let footer = document.getElementsByTagName('footer');
  footer[0].addEventListener('click', function(){
    console.log("clique");
  });
}

function functionOneBis() {
  let footer = document.getElementsByTagName('footer');
  let i = 1
  footer[0].addEventListener('click', function(){
    console.log(`clique numéro ${i}`);
    i++;
  });
}



function functionThree() {
  let firstCardText = document.getElementsByClassName('card-text')[0];
  let editButton = document.querySelectorAll('.btn-outline-secondary')[0];
  editButton.addEventListener('click', function() {
    firstCardText.style.color = 'red';
  });
}

function functionFour() {
  let editSecondCardButton = document.querySelectorAll('.btn-outline-secondary')[1];
  let secondCardText = document.getElementsByClassName('card-text')[1];
  let textColorStatus = 'normal'; 

  editSecondCardButton.addEventListener('click', function(){
    if (textColorStatus == 'normal') {
      secondCardText.style.color = 'green';
      textColorStatus = 'green'; 
    } else if (textColorStatus == 'green'){ 
      secondCardText.style.color = '';
      textColorStatus = 'normal';
    }
  });
}

function functionFive() {
  let navBar = document.getElementsByTagName('header')[0];
  let bootStrapStyleSheet = document.getElementsByTagName('link')[0];
  let styleStatus = 'bootstrap';

  navBar.addEventListener('dblclick', function() {
      if (styleStatus == 'bootstrap'){
        bootStrapStyleSheet.href = '';
        styleStatus = 'none';
      } else if (styleStatus == 'none'){
        bootStrapStyleSheet.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
        styleStatus = 'bootstrap';
      }
    });
}

function functionSix() {
  let cards = document.getElementsByClassName('col-md-4');
  let viewButtons = document.getElementsByClassName('btn-group');

  for (let i = 0; i < cards.length; i++) {
    viewButtons[i].firstElementChild.addEventListener('mouseover', function() {
      if (cards[i].getElementsByClassName('card-img-top')[0].style.width === "20%") {
        cards[i].getElementsByClassName('card-img-top')[0].style.width = "100%";
        cards[i].getElementsByClassName('card-text')[0].style.display = "block";
      } else {
          cards[i].getElementsByClassName('card-img-top')[0].style.width = "20%";
          cards[i].getElementsByClassName('card-text')[0].style.display = "none";
        }
    });
  }
}
function functionSeven() {
  let parentCards = document.getElementsByClassName('col-md-4');
  let row = document.getElementsByClassName('row')[1];
  let greyButton = document.getElementsByClassName('btn-secondary')[0];

  greyButton.addEventListener('click', function(e) {
    e.preventDefault();
    row.insertBefore(parentCards[parentCards.length-1], parentCards[0]);
  });
}

function functionEight() {
  let parentCards = document.getElementsByClassName('col-md-4');
  let blueButton = document.getElementsByClassName('btn-primary')[0];
  let row = document.getElementsByClassName('row')[1];

  blueButton.addEventListener('click', function(e) {
    e.preventDefault();
    row.appendChild(parentCards[0]);
  });
}

function functionNine() {
  let logo = document.getElementsByClassName('navbar-brand')[0];
  let body = document.getElementsByTagName('body')[0];

  logo.addEventListener("keypress", function(e) {
    e.preventDefault();
    let x = e.key
    if (x == "a" || x == "A") {
      body.className = "";
      body.classList.add("col-md-4");
    } else if (x == "y" || x == "Y") {
        body.className = "";
        body.classList.add("col-md-4");
        body.classList.add("offset-md-4");
    } else if (x == "p" || x == "P") {
        body.className = "";
        body.classList.add("col-md-4");
        body.classList.add("offset-md-8");
    } else if (x == "b" || x == "B") {
        body.className = "";
    }
  });
}

functionOne()
functionOneBis()
functionThree()
functionFour()
functionFive()
functionSix()
functionSeven()
functionEight()
functionNine()