'use strict'
var prodImage = document.getElementById('all_images');
var firstprodimg = document.getElementById('first_prod_img');
var secondprodimg = document.getElementById('second_prod_img');
var thirdprodimg = document.getElementById('third_prod_img');
var totalClicks = 0;

var firstprod = null;
var secondprod = null;
var thirdprod = null;

var prodimg = function (name, imageSrc ,FilePath) {
    this.name = name;
    this.FilePath;
    this.Times;
    this.clicks = 0;
    this.timesShown = 0;
    this.url = imageSrc;

    prodimg.allimage.push(this);
    prodimg.allImages = [];



    var rendernewprod = function (firstIndex, secondIndex,thirdIndex){
        firstprodimg.src = prodimg.allImages[firstIndex].url;
        secondprodimg.src = prodimg.allImages[secondIndex].url;
        thirdprodimg.src = prodimg.allImages[thirdIndex].url;
      };
      var pickNewprod = function(){
        var firstIndex = Math.floor(Math.random() * prodimg.allImages.length);
        do {
            var firstIndex = Math.floor(Math.random() * prodimg.allImages.length);
          } while (secondIndex === firstIndex);

          firstprod = prodimg.allImages[firstIndex];
          secondprod = prodimg.allImages[secondIndex];

  rendernewprod(firstIndex, secondIndex, thirdIndex);
};

      
}
Image.prototype.allimages=[];
new prodimg('bag','../img/bag.jpg');
new prodimg('banana','../img/banana.jpg');
new prodimg('bathroom','../img/bathroom.jpg');
new prodimg('boots','../img/boots.jpg');
new prodimg('breakfast','../img/breakfast.jpg');
new prodimg('bubblegum','../img/bubblegum.jpg');
new prodimg('chair','../img/chair.jpg');
new prodimg('cthulhu','../img/cthulhu.jpg');
new prodimg('dog-duck','../img/dog-duck.jpg');
new prodimg('dragon','../img/dragon.jpg');
new prodimg('pen','../img/pen.jpg');
new prodimg('pet-sweep','../img/pet-sweep.jpg');
new prodimg('scissors','../img/scissors.jpg');
new prodimg('shark','../img/shark.jpg');
new prodimg('sweep','../img/sweep.jpg');
new prodimg('tauntaun','../img/tauntaun.jpg');
new prodimg('unicorn','../img/unicorn.jpg');
new prodimg('usb','../img/usb.jpg');
new prodimg('water-can','../img/water-can.jpg');
new prodimg('wine-glass','../img/wine-glass.jpg');

