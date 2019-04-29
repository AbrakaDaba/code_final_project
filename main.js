 

window.onload = function() {
  window.addEventListener("beforeunload", function(){
    window.localStorage.setItem("styles", JSON.stringify(styles));
  })
  // if(localStorage){ 
    var customStyles = localStorage.getItem("styles");
    var styles = JSON.parse(customStyles);
    // }
    if(!localStorage || localStorage.styles == "null"){
      styles=[];
    }
    console.log(localStorage.styles);
    fontColor();
}

//HEADER SHOWING ON SCROLL
var myRoot = document.documentElement;
window.onscroll = function () {
  myFunction()
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headerHelper").className = "header-helper2";
  } else {
    document.getElementById("headerHelper").className = "";
  }
}


//WELCOME NOTE AND INTRO FADE IN
// $(document).ready(function(){
  $(".welcome-note").animate({
    opacity: "1",
  }, 1500);
  setTimeout(function () {
    $("#intro").animate({
      opacity: "1",
    }, 1500);
    $('#no').addClass('rotation-left');
    $('#no').css("right", "calc(50% - 135px)");
    $('#yes').addClass('rotation-right');
    $('#yes').css("left", "calc(50% - 135px)");
  }, 1000)
  // })
  

// for(var i =0; i<headerColorRgb.length; i++){
//   rgbSumm = rgbSumm + parseInt(headerColorRgb[i]);
// }
// if(rgbSumm>382){
//   header.style.color= "#888";
// }

// headerColorRgb = typeof(headerColorRgb)
// console.log(rgbSumm);

function Styles(name, size, color, scolor, bodyClass, shape, fontHead, fontPara) {
  this.style_name = name;
  this.font_size = size;
  this.main_color = color;
  this.second_color = scolor; 
  this.bodyClass = bodyClass;
  this.element_shape = shape;
  this.fontHeading = fontHead;
  this.fontParagraph = fontPara;
  this.changeName = function (name) {
    return this.style_name = name;
  }
  this.changeColor = function (color) {
    return this.main_color = color;
  }
  this.changeScolor = function (scolor) {
    console.log(fontColor);

    // fontColor();
    return this.second_color = scolor;
  }
  this.changeSize = function (size) {
    return this.font_size = size;
  }
  // this.changeImg = function (img) {
  //   return this.img = img;
  // }
  this.changeClass = function (bodyClass) {
    this.main_color = "";
    this.second_color = "";
    return this.bodyClass = bodyClass;
  }

  this.changeShape = function(shape){
    return this.element_shape = shape;
  }
  this.changeFontH = function(fontHead){
    return this.fontHeading = fontHead;
  }
  this.changeFontP = function(fontPara){
    return this.fontParagraph = fontPara;
  }
  this.styleSetter = function (size, color, scolor, bodyClass, shape) {
    document.querySelector('body').style.fontSize = size + "px";
    myRoot.style.setProperty('--my-bg-main', color);
    myRoot.style.setProperty('--my-bg-second', scolor);
    $('body').attr("class", bodyClass);

    if (bodyClass !== "" || !bodyClass) {
      var bodyBg = document.body;
      console.log("uja");
      setTimeout(function () {

        console.log($(bodyBg).css("background-color"));
        myRoot.style.setProperty('--my-bg-second', $(bodyBg).css("background-color"));
      }, 2000)
      myRoot.style.setProperty('--my-bg-main', "#fff");
      console.log($(bodyBg).css("background-color"));

    }
    myRoot.style.setProperty('--my-shape', shape);
    myRoot.style.setProperty('--font-heading', fontHead);
    myRoot.style.setProperty('--font-paragraph', fontPara);
  }
  // styles.push(this);
  // console.log(styles);
}

var myStyles = new Styles;
var hover = false;
////// STYLES HOVER //////
$(".styles-container").hover(function () {
  hover = true;
  $(".styles-container").css("left", "0");
  $('.brush-box').css("width", "88%");
  $(".brush-box").first().css("background-image" , "url(././img/brush.svg)");
  $("#my-logo").css("background-image" , "url(././img/david_damnjanovic_logo.svg)");
}, function () {
  hover = false;
  $('.dropmenu').css({
    "height": "0px", 
  });
  // setTimeout(function(){
    $(".styles-container").css("left", "-280px");
    $('.brush-box').css("width", "155%");

  // }, 1000)
  setTimeout(fontColor);
})



/////// DROPDOWN FUNCTION IN STYLING MENU ////////
$('.dropdown').click(function (el) {
  // $('.dropdown').children().removeClass("roto")
  // $(el.target).children().addClass("roto");
  $('.dropmenu').css({
    "height": "0px", 
  }); 
  $(el.target).next().animate({
    height: $(el.target).next().get(0).scrollHeight
  }, "ease");
  
  
  console.log($(el.target).next().get(0).style.height, $(el.target).next().get(0).style.height);
  if(Math.floor(parseInt(($(el.target).next().get(0).style.height))) != 0){
    $('.dropmenu').css({
      "transition": "2s", 
    }); 
    $('.dropmenu').attr({
      style : "", 
    }); 
  }
                    
})



///// DAVIDS FAVORITE ///////
document.querySelector(".fav-item").onclick = function () {
  clearInterval(fadeInterval);
  $('body').css("background", "");
  myStyles.styleSetter(16, "#eee", "red", "diamond");
  console.log(myStyles);

}

/////// MAGNIFIER ///////
function f_magnifier() {
  var magnif_value = document.getElementById('magnifier').value;
  myRoot.style.setProperty('--my-font-size', magnif_value + "px");
  myStyles.changeSize(magnif_value + "px");
  console.log(myStyles);
}


/////// COLOR CHANGER ///////
function mainColorChanger() {
  clearInterval(fadeInterval);
  $('body').css("background-image", "none");
  $('body').attr("class", "linear_ltr")
  var mainColor = document.getElementById('main-color').value;
  var secondColor = document.getElementById('second-color').value;
  myRoot.style.setProperty('--my-bg-main', mainColor);
  myRoot.style.setProperty('--my-bg-second', secondColor);
  myStyles.changeColor(mainColor);
  myStyles.changeScolor(secondColor);
  console.log(myStyles);
  setTimeout(fontColor, 280); 
}


//////// GRADIENTS ///////
// function gradients(){ 
  $("#gradients").children().click(gradients);

  function gradients(el) {
    clearInterval(fadeInterval);
    $('#main-color').click(clearInterval(fadeInterval));
    var mainColor = document.getElementById('main-color').value;
    var secondColor = document.getElementById('second-color').value;
    myRoot.style.setProperty('--my-bg-main', mainColor);
    myRoot.style.setProperty('--my-bg-second', secondColor);
    myStyles.changeColor(mainColor);
    myStyles.changeScolor(secondColor);
    // $('body').css("background", "none");
    $('body').attr("class", el.currentTarget.className);
    setTimeout(fontColor, 280);
  }
  // }
  
  
  //////// PATERNS ///////
  // function patterns(){ 
  $("#patterns").children().click(function (el) {
    el.preventDefault();
    clearInterval(fadeInterval);
    $('body').css("background", "");
    // $('body').css("background-image", $(this).css("background-image"));
    $('body').attr("class", el.currentTarget.className);
    var bodyBg = $('body').css("background-color");
    // myRoot.style.setProperty('--my-bg-second', bodyBg);
    myRoot.style.setProperty('--my-bg-second', $(this).css("background-color"));
    // console.log(bodyBg, this);
    // var img =  $(this).css("background-image");
    myStyles.changeClass(el.currentTarget.className);
    console.log(myStyles);
    setTimeout(fontColor, 280);
  })
  // }
  
////// COLOR FADING //////
$("#fade").click(colorFading)

var fadeInterval;

function colorFading() {
  $('body').css("background-image", "none");
  $('body').attr("class", "");
  $('#about').css("background-color", "none");
  myRoot.style.setProperty('--my-bg-second', "rgb(57, 87, 94)");
  $('body').css("background-color", "rgb(57, 87, 94)");
  fadeInterval = setInterval(function () {
    var r = Math.floor(Math.random() * 115 + 50);
    var g = Math.floor(Math.random() * 115 + 50);
    var b = Math.floor(Math.random() * 115 + 50);
    var comb = `rgb(${r},${g},${b})`;
    var comb2 = `rgb(${r-30},${g-30},${b-30})`
    $('body').css("background", comb);
    myRoot.style.setProperty('--my-bg-second', comb2);
    myRoot.style.setProperty('--my-bg-main', "rgba(0,0,0,0)");
  }, 3000)
}

///// CHANGING SHAPES /////
function shapes() {
  var shapes = $(".shape")[0].children;
  for (i = 0; i < shapes.length; i++) {
    shapes[i].addEventListener("click", function (el) {
      myRoot.style.setProperty('--my-shape', getComputedStyle(el.target).borderRadius)
myStyles.changeShape(getComputedStyle(el.target).borderRadius)
      if (getComputedStyle(el.target).borderRadius == "50%") {
        $('#my-logo').css({
          "background-size": "111%",
          "background-position": "-1px -2px",
          "border-radius": "50%",
          "border": "1px solid black"
        })
      } else {
        $('#my-logo').css({
          "background-size": "cover",
          "background-position": "center center",
          "border-radius": "0",
          "border": "none",
        })

      }
    })
  }
}
shapes();

// var centerX = this.innerWidth / 2;
// var centerY = this.innerHeight / 2;

// function contraDirection(event) {
//   var circle = document.getElementById("main-circle");
//   var logo = document.getElementById("my-logo");
//   var x = event.clientX;
//   var y = event.clientY; 
//     if (x > centerX && y > centerY) { 
//       circle.style.transform= "translate3d("+Math.floor(x/centerX*(-20))+"px, "+Math.floor(y/centerY*(-20))+"px, 0px)"

//     }else{
//       circle.style.transform=  "translate3d("+x/centerX*20+"px, "+y/centerY*20+"px, 0px)"
//     }
//     if (x > centerX && y < centerY) { 
//       circle.style.transform= "translate3d("+Math.floor(x/centerX*(-10))+"px, "+Math.floor(y/centerY*10)+"px, 0px)"

//     }else{
//       circle.style.transform=  "translate3d("+x/centerX*10+"px, "+y/centerY*(-10)+"px, 0px)"
//     }

// }


//FONT COLOR CHANGER - DARK/LIGHT FONT COLOR
function fontColor() {
  var header = document.getElementById("headerHelper")
  headerColor = getComputedStyle(header).backgroundColor
  var headerColorRgb = headerColor.substring(4, headerColor.length - 1).split(',')
  var rgbSumm = 0;
  headerColor = getComputedStyle(header).backgroundColor
  console.log(headerColor);
  for (var i = 0; i < headerColorRgb.length; i++) {
    rgbSumm = rgbSumm + parseInt(headerColorRgb[i]);
    console.log(rgbSumm, parseInt(headerColorRgb[i]));
  }

  if (rgbSumm > 490) {
    header.style.color = "#000";
    $('#about, .about').css("color", "#000000");
    $(".brush-box").first().css("background-image" , "url(././img/brush.svg)");
    $("#my-logo").css("background-image" , "url(././img/david_damnjanovic_logo.svg)");

  } else {
    header.style.color = "#fff";
    $('#about, .about').css("color", "#fff");
    // $('#brush').attr("fill" , "#ffffff");
    $(".brush-box").first().css("background-image" , "url(././img/brush-white.svg)");
    $("#my-logo").css("background-image" , "url(././img/david_damnjanovic_logo_white.svg)");
    console.log($(".brush-box").first().css("background-image"));
  }
  if(hover){
    $(".brush-box").first().css("background-image" , "url(././img/brush.svg)");
    $("#my-logo").css("background-image" , "url(././img/david_damnjanovic_logo.svg)");
  }
}




// var headingsFont = false;
// var paragraphsFont = false; 
$('.fonts').children().click(function (el) {
  var font = ($(el.currentTarget).css("font-family"))
if($( "input:checked" ).val()  == "headings") {
    myRoot.style.setProperty('--font-heading', font);
    myStyles.changeFontH(font);
  }  
  // if(this.checked && this.value == "texts"){
    if($( "input:checked" ).val()  == "texts")
     {
    myRoot.style.setProperty('--font-paragraph', font);
    myStyles.changeFontP(font);
  }
console.log(myStyles);

});
 

//////// DISPLAY LOG-IN FORM ///////
$("#sign-in-start").click(function(){
  console.log("UJaaa");

  $("#total-display").show();
  $("body").css("overflow", "hidden");
  $("#total-display").show(); 
  setTimeout(function(){

    $(document).click(function () {
          $('#total-display').hide();
          $("body").css("overflow", "auto");
  });
  $('.form-signin , #sign-in-start').click(function(event){
    $("#total-display").show();
    event.stopPropagation();
  });
  },100)
})

var currentPage = Array.from(document.getElementsByClassName("current"));
// console.log(currentPage);

currentPage.forEach(el => {
  // console.log(el);

  $(el).click(function () {
    // console.log(this);

  });
});

////// SKILLS DISCOVER EFFECTS //////
document.querySelectorAll(".skill").forEach((el) => {
  var clickEnabled = true;
  // console.log(clickEnabled);

  var bgColor = $(el).css("background-color");
  el.children[0].style.backgroundColor = bgColor;
  if (!clickEnabled) {
    return
  } else {
    clickEnabled = false;
    el.addEventListener("click", function () {
      // console.log(clickEnabled);
      el.children[0].style.transition = "1s";
      el.children[0].style.opacity = "0";


      // el.children[1].style.display="block";
      el.children[1].style.opacity = "1";
      el.children[1].style.paddingLeft = "123px";
      el.children[1].style.letterSpacing = "0px";
      // el.children[1].style.fontSize = "3em"
      // el.children[1].style.fontSize = "2em"
      $(el).css("box-shadow", "0px 0px 7px rgba(0,0,0,.7)");

      // console.log(document.querySelector('.bg-doors').children);
      document.querySelectorAll('.door').forEach((elem) => {
        elem.style.width = "0%";
        elem.style.transition = ".5s";
        elem.style.width = "50%";
        elem.style.backgroundColor = bgColor;
        setTimeout(function () {
          $('.bg-doors').css("background-color", bgColor);
        }, 500)
        setTimeout(function () {
          $('.bg-doors').css("background-color", bgColor);
          elem.style.width = "0%";
          clickEnabled = true;
        }, 800)

      })

      var skillText = $(el).children()[1];
      $('.skill-text').text($(skillText).text());
      $('.skill-text').css("opacity",0)
      $('.skill-text').animate({
      opacity: "1", 
      
      }, 2000),{
        opacity:"0",
      }
    });
  }
  // console.log(clickEnabled);

});


