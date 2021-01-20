'use strict';


function prodimg(name, source) {
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.view = 0;
    this.value = 0;
    prodimg.prototype.allprodimgs.push(this);
}
// prodimg.prototype.allprodimgs =[];

var setmaxuserRoundsForm = document.getElementById('setmaxuserRounds')
setmaxuserRoundsForm.addEventListener('submit', submit);

function submit(event) {
    console.log(event);
    event.preventDefault();
    maxClickUser = event.target.rounds.value;
    console.log('value')
}


prodimg.prototype.allprodimgs = [];
new prodimg('bag', '../img/bag.jpg');
new prodimg('banana', '../img/banana.jpg');
new prodimg('bathroom', '../img/bathroom.jpg');
new prodimg('boots', '../img/boots.jpg');
new prodimg('breakfast', '../img/breakfast.jpg');
new prodimg('bubblegum', '../img/bubblegum.jpg');
new prodimg('chair', '../img/chair.jpg');
new prodimg('cthulhu', '../img/cthulhu.jpg');
new prodimg('dog-duck', '../img/dog-duck.jpg');
new prodimg('dragon', '../img/dragon.jpg');
new prodimg('pen', '../img/pen.jpg');
new prodimg('pet-sweep', '../img/pet-sweep.jpg');
new prodimg('scissors', '../img/scissors.jpg');
new prodimg('shark', '../img/shark.jpg');
new prodimg('sweep', '../img/sweep.png');
new prodimg('tauntaun', '../img/tauntaun.jpg');
new prodimg('unicorn', '../img/unicorn.jpg');
new prodimg('usb', '../img/usb.gif');
new prodimg('water-can', '../img/water-can.jpg');
new prodimg('wine-glass', '../img/wine-glass.jpg');

function randomNumbGenerator() {
    return Math.floor(Math.random() * (prodimg.prototype.allprodimgs.length));

}
function chart() {

    var votes = [];
    for (var i = 0; i < prodimg.prototype.allprodimgs.length; i++) {
        votes.push(prodimg.prototype.allprodimgs[i].vote);
        console.log(prodimg.prototype.allprodimgs[i].vote);

    }
    console.log(prodimg.prototype.allprodimgs);


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duch', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: votes
            }]
        },

        // Configuration options go here
        options: {}
    });

}




var firstimg = document.getElementById('first-image');
var secondimg = document.getElementById('second-image');
var thirdimg = document.getElementById('third-image');



var imagesDiv = document.getElementById('images-Div');
var resultslist = document.getElementById('results-list');
var resultslistbutton = document.getElementById('results-list-button');
var setmaxuserRoundsForm = document.getElementById('setmaxuserRounds');

var maxClickUser = 25;
var userClickCounter = 0;

var firstIndex;
var secondIndex;
var thirdIndex;

var previousfirstIndex = -1;
var previoussecondIndex = -1;
var previousthirdIndex = -1;


console.log(firstimg, secondimg, thirdimg)


function renderThreeRandomImages() {
    var previousimgs = [previousfirstIndex, previoussecondIndex, previousthirdIndex];

    do {
        firstIndex = randomNumbGenerator();
    } while (previousimgs.includes(firstIndex));
    previousimgs.push(firstIndex)
    do {
        secondIndex = randomNumbGenerator();
    } while (previousimgs.includes(secondIndex));
    previousimgs.push(secondIndex)
    do {
        thirdIndex = randomNumbGenerator();
    } while (previousimgs.includes(thirdIndex));
    previousimgs.push(thirdIndex)


    firstimg.src = prodimg.prototype.allprodimgs[firstIndex].source;
    prodimg.prototype.allprodimgs[firstIndex].view++;


    secondimg.src = prodimg.prototype.allprodimgs[secondIndex].source;
    prodimg.prototype.allprodimgs[secondIndex].view++;


    thirdimg.src = prodimg.prototype.allprodimgs[thirdIndex].source;
    prodimg.prototype.allprodimgs[thirdIndex].view++;

    //     if ((firstimg !== secondimg && thirdimg) && (secondimg !== thirdimg && firstimg ) && (thirdimg !== secondimg && firstimg)){

    // }
}

renderThreeRandomImages();
// firstimg.addEventListener()
imagesDiv.addEventListener('click', clickByUser);
resultslist.addEventListener('click', resultslist);
setmaxuserRounds.addEventListener('click', setmaxuserRounds);
resultslistbutton.addEventListener('click', seeResults);



function clickByUser(event) {

    console.log('clickByUser');
    if (userClickCounter < maxClickUser) {
        if (event.target.id === 'first-image') {
            userClickCounter++;
            prodimg.prototype.allprodimgs[firstIndex].vote++;
            renderThreeRandomImages();

        } else if (event.target.id === 'second-image') {
            userClickCounter++;
        }
    }

}


function seeResults() {
    // var resultsList = document.getElementById('results list');
    var endResult;

    for (var i = 0; i < prodimg.prototype.allprodimgs.length; i++) {
        endResult = document.createElement('li');
        // endResult.textContent = 'name';
        endResult.textContent = prodimg.prototype.allprodimgs[i].name + 'has'
            + prodimg.prototype.allprodimgs[i].vote + ' votes , and was seen ' +
            prodimg.prototype.allprodimgs[i].view + 'times.' + ' The percentage of selcting this  prodimg is :' + (prodimg.prototype.allprodimgs[i].
                vote * 100 / prodimg.prototype.allprodimgs[i].view) + '%';
        resultslist.appendChild(endResult);
        // console.log('prodimg');

    }
    chart();

}


