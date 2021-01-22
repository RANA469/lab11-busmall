'use strict';
// declare variabels

var indexProd = [];
var allprodimgs = [];
var vote = [];
var view = [];
var name = [];

var firstIndex;
var secondIndex;
var thirdIndex;

var firstimg = document.getElementById('first-image');
var secondimg = document.getElementById('second-image');
var thirdimg = document.getElementById('third-image');

var maxClickUser = 25;
var userClickCounter = 0;

chart();

// constructer
function prodimg(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.views = 0;
    this.perVote = 0;
    this.peView = 0;

    this.imgTotalView = 0;
    this.imgTotalVote = 0;

    value.push(name);
    allprodimgs.push(this);

    indexImg = allprodimgs.indexOf(this.name);
    imgName.push(name);
}
// prodimg.prototype.allprodimgs.push(this);


var setmaxuserRoundsForm = document.getElementById('setmaxuserRounds')
setmaxuserRoundsForm.addEventListener('submit', submit);

function submit(event) {
    console.log(event);
    event.preventDefault();
    maxClickUser = event.target.rounds.value;
}

imagesDiv.addEventListener('click', clickByUser);
resultslist.addEventListener('click', resultslist);
setmaxuserRounds.addEventListener('click', setmaxuserRounds);
resultslistbutton.addEventListener('click', seeResults);



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


var previousIndex = [-1, -1, -1];
var previous;


// to make random number for the img 
function randomNumbGenerator() {
    return Math.floor(Math.random() * (prodimg.prototype.allprodimgs.length));
}
randomNumbGenerator();



// the chart 
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

form.removeEventListener('submit', clickByUser)
var firstimage = document.getElementById('clickByUser');
var secondimage = document.getElementById('clickByUser');
var thirdimage = document.getElementById('clickByUser');

console.log(firstimg, secondimg, thirdimg)

function renderThreeRandomImages() {
    do {
        previous = false;
        firstIndex = randomNumbGenerator();
        secondIndex = randomNumbGenerator();
        thirdIndex = randomNumbGenerator();
        if (previousIndex[0] == -1) {
            previousIndex[0] = firstIndex; previousIndex[1] = secondIndex; previousIndex[2] = thirdIndex = randomNumbGenerator();
            ;
        }
        else {
            leftImgIndex = generateRandomIndex();
            var A = previousIndex[0];
            var B = previousIndex[1];
            var C = previousIndex[2];
            if (A == firstIndex || B == firstIndex || C == firstIndex || A == secondIndex || B == secondIndex || C == secondIndex || A == thirdIndex || B == thirdIndex || C == thirdIndex) {
                previous = true;
            }
        }
    } while (firstIndex === secondIndex || firstIndex === thirdIndex || secondIndex === thirdIndex || previousIndex;
    // update the array values
    check[0] = firstIndex; check[1] = secondIndex; check[2] = thirdIndex;
    // added the img (objects)
    firstIndex.src = allImg[firstIndex].source;
    allImg[firstIndex].views++;
    middleImg.src = allImg[secondIndex].source;
    allprodimgs[secondIndex].views++;
    rightImg.src = allprodimgs[thirdIndex].source;
    allprodimgs[thirdIndex].views++;
}
// previousthirdIndex = previousthirdIndex


// firstimg.src = prodimg.prototype.allprodimgs[firstIndex].source;
// prodimg.prototype.allprodimgs[firstIndex].view++;


// secondimg.src = prodimg.prototype.allprodimgs[secondIndex].source;
// prodimg.prototype.allprodimgs[secondIndex].view++;


// thirdimg.src = prodimg.prototype.allprodimgs[thirdIndex].source;
// prodimg.prototype.allprodimgs[thirdIndex].view++;

//     if ((firstimg !== secondimg && thirdimg) && (secondimg !== thirdimg && firstimg ) && (thirdimg !== secondimg && firstimg)){

// }


renderThreeRandomImages();
// firstimg.addEventListener()



function clickByUser(event) {
    console.log('clickByUser');
    if (userClickCounter < maxClickUser) {
        if (event.target.id === 'first-image') {
            prodimg.prototype.allprodimgs[firstIndex].votes++;

        } else if (event.target.id === 'second-image') {
            prodimg.prototype.allprodimgs[secondIndex].votes++;
        }

    } else if (event.target.id === 'third-image') {
    }
    userClickCounter++;
    renderThreeRandomImages();
}



if ( userClickCounter == maxClickUser) {
    // handle end of voting
    document.getElementById('show-result').style.visibility = "visible";
    var viewResult = document.getElementById('theResult');
    viewResult.addEventListener('submit', theResult);
    // remove events
    firstimage.removeEventListener('click', clickByUser);
    secondimage.removeEventListener('click', clickByUser);
    thirdimage.removeEventListener('click', clickByUser);
}



// seeResults();
// chart();
// list();
//     }


function seeResults(event) {
    event.preventDefault();


    for (var i = 0; i < allImg.length; i++) {
        imgVote.push(allImg[i].votes);
        imgView.push(allImg[i].views);
    }
    getinfo();
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
}


function percentage() {
    for (var i = 0; i < allImg.length; i++) {
        allImg[i].perViow = (allImg[i].shown * 100) / maxAttempts;
        allImg[i].perVotes = (allImg[i].votes * 100) / maxAttempts;
    }
}

// here is the storage data 
var setlist = [];
function list() {
    setlist = JSON.stringify(prodimg.prototype.allprodimgs);
    localStorage.setItem('setlist', setlist);

}

function getinfo() {
    var imgeslist = localStorage.getItem('allprodimgs');
    var list = JSON.parse(imgeslist);

    if (list !== null) {
        prodimg.prototype.allprodimgs = list;
        setlist = imgjs;
    }
}
