 // var styles=[];
 // var users=[];
 var id;
 var yPosition = window.pageYOffset;
 var myRoot = document.documentElement;



 window.addEventListener("beforeunload", function () {
   window.localStorage.setItem("styles", JSON.stringify(styles));
   window.localStorage.setItem("users", JSON.stringify(users));
   // localStorage.clear()
 })

 if (typeof (window.localStorage) == "undefined" || !localStorage.styles || localStorage.styles == 'undefined' || localStorage.styles == "null" || typeof (window.localStorage) == "undefined") {
   // if (typeof(window.localStorage.styles)=="undefined") {   
   styles = [];
   console.log(typeof (styles));

 } else {
   var customStyles = localStorage.getItem("styles");
   var styles = JSON.parse(customStyles);
 }

 // localStorage.clear()
 if (typeof (localStorage) == "undefined" || !localStorage.users || localStorage.users == 'undefined' || localStorage.users == "null") {
   // if (typeof(localStorage) == "undefined") {
   users = [];
   id = 0;
   // localStorage.clear()
 } else {
   var myUsers = localStorage.getItem("users");
   var users = JSON.parse(myUsers);
   id = users.length;
   // localStorage.clear()
 };
 window.onload = function () {
   fontColor();
 }

 

 ////// ON SCROLL - HEADER AND YES/NO GEAR BUTTONS ///////
 window.onscroll = function () {
   headeronScroll()
   yPosition = window.pageYOffset;
   yesNoPositioning()
   console.log(yPosition);
 };

 function headeronScroll() {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     document.getElementById("headerHelper").className = "header-helper2";
   } else {
     document.getElementById("headerHelper").className = "";
   }
 }





 $("#change-it").click(changeIt)
 $("#no").click(changeIt)

 function changeIt() {
   stylesHover()
   $(".styles-container").show()
   $('.brush-box').css("width", "88%");
   $(".styles-container").css("left", "0");
 }



 //WELCOME NOTE AND INTRO FADE IN
 $(document).ready(function () {

   $(".welcome-note")
     .animate({
       opacity: "1"
     }, 1500)
   setTimeout(function () {
     $("#intro").animate({
       opacity: "1",
     }, 1500);
     $(".question").animate({
       opacity: "1",
     }, 1500);
     $('#no').addClass('rotation-left');
     $('#no').css("right", "calc(50% - 145px)");
     $('#yes').addClass('rotation-right');
     $('#yes').css("left", "calc(50% - 145px)");

     heightCalculator()

   }, 1000)
 })

 $(window).resize(yesNoPositioning)
   function yesNoPositioning () {
   $("#no").css("transition", ".5s")
   setTimeout(function () {
     var a, b, c, x;
     x = window.innerWidth / 2 - 150
     a = document.querySelector(".welcome-note").scrollHeight;
     b = document.querySelector("#intro").scrollHeight;
     c = document.querySelector(".question").scrollHeight;
     var elHeights = a + b + c + 190 + "px";
     var elHeights2 = a + b + c + 190 + "px";
     $("#runningYes").css("top", elHeights)
     $("#runningYes").css("left", x + "px");
     $("#no").css("top", elHeights2)
     var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
     var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
     $("#runningYes").on({
       click: function () {
         $("#runningYes").css("left", Math.floor(Math.random() * viewportWidth * 0.75) + "px");
         $("#runningYes").css("top", Math.floor(Math.random() * viewportHeight * 0.75) + yPosition + "px");

       }
     })
   }, 500)

 }

 /////// HEIGT CALCULATION FOR ROLLING BUTTONS ///////
 function heightCalculator() {
   var a, b, c;


   a = document.querySelector(".welcome-note").scrollHeight;
   b = document.querySelector("#intro").scrollHeight;
   c = document.querySelector(".question").scrollHeight;
   var elHeights = a + b + c + 190 + "px"
   $("#yes").css("top", elHeights)
   $("#no").css("top", elHeights)
   $("#runningYes").css("top", elHeights)
   setTimeout(startRunningYes(elHeights), 1000)
 }


 function startRunningYes() {
   setTimeout(function () {
     var x, y;
     x = document.querySelector("#yes").offsetLeft;
     y = document.querySelector("#yes").offsetTop;
     var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
     var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
     console.log(viewportHeight, viewportWidth);
     var angle = 160
     $("#runningYes").css("left", x + "px");
     $("#runningYes").css("top", y + "px");
     $("#yes").hide();
     $("#runningYes").addClass("flex-el");
     $("#runningYes").on({
       click: function () {
         angle = angle + 260
         $("#runningYes").css("transform", "rotate(" + angle + "deg)");

         $("#runningYes").css("left", Math.floor(Math.random() * viewportWidth * 0.75) + "px");
         $("#runningYes").css("top", Math.floor(Math.random() * viewportHeight * 0.75) + yPosition + "px");
       }
     })
   }, 4000)

 }



 function Styles(id, name, size, color, scolor, bodyClass, shape, fontHead, fontPara) {
   this.user_id = id;
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
   this.changeClass = function (bodyClass) {
     if (bodyClass !== "linear_ltr" || bodyClass !== "linear_ttb" || bodyClass !== "linear_tltbr" || bodyClass !== "linear_trtbl" || bodyClass !== "radial") {
       this.main_color = "";
       this.second_color = "";
       return this.bodyClass = bodyClass;
     } else {
       this.main_color = color;
       this.second_color = scolor;
       return this.bodyClass = bodyClass;
     }

   }

   this.changeShape = function (shape) {
     return this.element_shape = shape;
   }
   this.changeFontH = function (fontHead) {
     return this.fontHeading = fontHead;
   }
   this.changeFontP = function (fontPara) {
     return this.fontParagraph = fontPara;
   }
   this.styleSetter = function (id, name, size, color, scolor, bodyClass, shape, fontHead, fontPara) {
     document.querySelector('body').style.fontSize = size + "px";
     myRoot.style.setProperty('--my-bg-main', color);
     myRoot.style.setProperty('--my-bg-second', scolor);
     myRoot.style.setProperty('--my-shape', shape);
     myRoot.style.setProperty('--font-heading', fontHead);
     myRoot.style.setProperty('--font-paragraph', fontPara);
     $("#main-color").attr("value", color);
     $("#second-color").attr("value", scolor);
     $('body').attr("class", bodyClass);

   }
 }

 var myStyles = new Styles;
 var hover = false;
 ////// STYLES HOVER //////
 function stylesHover() {
   $(".styles-container").hover(showStylesContainer, hideStylesContainer);

   function showStylesContainer() {
     hover = true;
     $(".styles-container").css("left", "0");
     $('.brush-box').css("width", "88%");
     $(".brush-box").first().css("background-image", "url(././img/brush.svg)");
     $("#my-logo").css("background-image", "url(././img/david_damnjanovic_logo.svg)");
   };

   function hideStylesContainer() {
     hover = false;
     $('.dropmenu').css({
       "height": "0px",
     });
     $(".styles-container").css("left", "-280px");
     $('.brush-box').css("width", "160%");
     setTimeout(fontColor);
   }
 }
 stylesHover();


 /////// DROPDOWN FUNCTION IN STYLING MENU ////////
 $('.dropdown').click(function (el) {
   $('.dropmenu').css({
     height: "0px",
     transition: "1s"
   });
   if ($(el.target).next().hasClass("open")) {
     $(el.target).next().css({
       height: "0px",
       transition: ".5s"
     });
     $('.dropmenu').removeClass("open")
   } else {
     $('.dropmenu').removeClass("open")
     $(el.target).next().css({
       "height": $(el.target).next().get(0).scrollHeight
     });
     $(el.target).next().addClass("open")
   }

 })



 ///// DAVIDS FAVORITE ///////
 document.querySelector(".fav-item1").onclick = function () {
  clearInterval(fadeInterval);
  $('body').css("background", "");
  myStyles.styleSetter(0,"River blue", 11, "#129887", "#293f58", "radial","0%","coldiac", "ntr");
  console.log(myStyles);


 }
 document.querySelector(".fav-item2").onclick = function () {
   clearInterval(fadeInterval);
   $('body').css("background", "");
   myStyles.styleSetter(0,"Shadow'n'White", 13, "#cbd1da", "#303030", "linear_ltr","50%","montserrat", "juliussans");
   console.log(myStyles);

 }
 document.querySelector(".fav-item3").onclick = function () {
   clearInterval(fadeInterval);
   $('body').css("background", "");
   myStyles.styleSetter(16, "#eee", "red", "diamond");
   console.log(myStyles);

 }

 /////// MAGNIFIER ///////
 // $("#magnifier").on("change",heightCalculator)

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


 //FONT COLOR CHANGER - DARK/LIGHT FONT COLOR
 function fontColor() {
   var header = document.getElementById("headerHelper")
   headerColor = getComputedStyle(header).backgroundColor
   var headerColorRgb = headerColor.substring(4, headerColor.length - 1).split(',')
   var rgbSumm = 0;
   headerColor = getComputedStyle(header).backgroundColor
   for (var i = 0; i < headerColorRgb.length; i++) {
     rgbSumm = rgbSumm + parseInt(headerColorRgb[i]);
   }

   if (rgbSumm > 490) {
     header.style.color = "#000";
     $('#about, .about').css("color", "#000000");
     $(".brush-box").first().css("background-image", "url(././img/brush.svg)");
     $("#my-logo").css("background-image", "url(././img/david_damnjanovic_logo.svg)");

   } else {
     header.style.color = "#fff";
     $('#about, .about').css("color", "#fff");
     $(".brush-box").first().css("background-image", "url(././img/brush-white.svg)");
     $("#my-logo").css("background-image", "url(././img/david_damnjanovic_logo_white.svg)");
     console.log($(".brush-box").first().css("background-image"));
   }
   if (hover) {
     $(".brush-box").first().css("background-image", "url(././img/brush.svg)");
     $("#my-logo").css("background-image", "url(././img/david_damnjanovic_logo.svg)");
   }
 }


 ////// FONTS FUNCTION /////
 $('.fonts').children().click(function (el) {
   var font = ($(el.currentTarget).css("font-family"))
   if ($("input:checked").val() == "headings") {
     myRoot.style.setProperty('--font-heading', font);
     myStyles.changeFontH(font);
   }
   if ($("input:checked").val() == "texts") {
     myRoot.style.setProperty('--font-paragraph', font);
     myStyles.changeFontP(font);
   }
 });


 ////// SKILLS DISCOVER EFFECTS //////
 document.querySelectorAll(".skill").forEach((el) => {
   var clickEnabled = true;
   var bgColor = $(el).css("background-color");
   el.children[0].style.backgroundColor = bgColor;
   if (!clickEnabled) {
     return
   } else {
     clickEnabled = false;
     el.addEventListener("click", function () {
       el.children[0].style.transition = "1s";
       el.children[0].style.opacity = "0";

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
       $('.skill-text').css("opacity", 0)
       $('.skill-text').animate({
         opacity: "1",

       }, 2000), {
         opacity: "0",
       }
     });
   }
 });



 ///////////////////////////////////////////////
 ////////////      F O R M S      //////////////
 ///////////////////////////////////////////////

 $("#sign-in-start").click(signingIn)
 $("#log-in-start").click(logIn)

 function startFormsPosition() {
   $(".form-login").css("right", "-100vw");
   $(".form-signin").css("left", "-100vw");
   $('#form-display').hide();
   $('.form-signin').hide();
   $('.form-login').hide();
   $("body").css("overflow", "auto");
   $('.form-signin, #sign-in-start, .form-login, #log-in-start').click(function (event) {
     $("#form-display").attr("style", "display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex;");
     event.stopPropagation();
   });
 }

 function displaySignIn() {
   $("body").css("overflow", "hidden");
   $("#form-display").attr("style", "display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex;");
   $('.form-signin').show();
   $(".form-signin").animate({
     left: "0vw",
   })
 }

 function displayLogIn() {
   $("body").css("overflow", "hidden");
   $("#form-display").attr("style", "display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex;");
   $('.form-login').show();
   $(".form-login").animate({
     right: "0vw",
   })
 }

 function hideFormDisplay() {
   $('#form-display').hide();
   $("body").css("overflow", "auto");
   $("#sign-in-form").trigger("reset");
   $("#log-in-form").trigger("reset");
 };

 //////// BUBBLE LINKS- DISPLAY SIGN-IN FORM ///////
 function signingIn() {
   startFormsPosition()
   displaySignIn()
   setTimeout(function () {
     $(document).click(hideFormDisplay)
   }, 5)
 }

 //////// BUBBLE LINKS- DISPLAY LOG-IN FORM ///////
 function logIn() {
   $("#log-in-form").trigger("reset");
   startFormsPosition();
   displayLogIn();
   setTimeout(function () {
     $(document).click(hideFormDisplay)
   }, 5);
   validationForm();
 }


 /////// LOGING IN FROM SIGNING IN FORM ////////
 $("#log-in-span").click(function (event) {
   $("#form-display").attr("style", "display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex;");
   $(".form-signin").animate({
     left: "-100vw",
   })
   setTimeout(function () {
     logIn();
   }, 500)
   event.stopPropagation();
 });

 /////// SIGNING IN SUBMIT ////////
 $("#sign-in-form").submit(function (event) {
   loginInfo = {
     id: ++id,
     userName: $("#username").val(),
     userPassword: $("#password").val()
   }
   console.log(users.length);

   if (users.length !== 0) {
     users.forEach(function (el) {
       console.log(loginInfo.userName, el.userName)
       if (loginInfo.userName == el.userName) {
         messageBox("Sorry... username already taken")
         // $('#sign-in-form').trigger("reset")
         return
       } else {
         $(".form-signin").animate({
           left: "-100vw",
         })
         setTimeout(function () {
           $(".form-signin").css("display", "none");
         }, 400)
         users.push(loginInfo);
         $("#signinBtn").click(validationForm(loginInfo));
         event.preventDefault();

       }
     })

   } else {
     $(".form-signin").animate({
       left: "-100vw",
     })
     setTimeout(function () {
       $(".form-signin").css("display", "none");
     }, 400)
     users.push(loginInfo);
     $("#signinBtn").click(validationForm(loginInfo));
     event.preventDefault();

   }
 })


 ///// VALIDATION FORM //////
 function validationForm(loginInfo) {

   setTimeout(function () {
     $(".form-login").css("display", "block");
     $(".form-login").animate({
       right: "0vw"
     }, 400)
   }, 400)


   $("#log-in-form").submit(function (event) {

     loginValid = {
       userName: $("#username1").val(),
       userPassword: $("#password1").val()
     }

     if (users.length == 0) {
       messageBox("You have to sign in first")
     } else {
       users.forEach(function (el) {

         if (el.userName == loginValid.userName && el.userPassword == loginValid.userPassword) {
           hideFormDisplay()
           $('.save-box').attr("class", "save-box save-box2");
           $('#theme-name').show();
           messageBox("Welcome " + loginValid.userName);
           var userId = el.id;
           styles.forEach(function (style) {
             if (style.user_id == userId) {
               $('#favorites').show();
               $(".fav-user").append('<div class="fav-item"><span class="theme-name" id="' + style.style_name + '">' + style.style_name + '</span><span class="remove" id="' + style.user_id + '">REMOVE<span></div>');
             }
           })
           savingTheme(userId)
           $('.theme-name').click(startTheme)
           $('.remove').click(deleteTheme)
           // return
         } else {
           $("#incorrect")
             .css({
               opacity: "1",
               marginTop: "20px",
               marginBottom: "20px"
             })
         }
       })
     }
     event.preventDefault();
   })
 }


 //////// SAVING THEME ////////
 function savingTheme(userId) {
   $("#saveButton").click(function () {
     var themeName = $("#style-name").val();
     console.log(themeName);

     if (themeName !== "") {
       $("#style-name").val('');
       if (($(".fav-user").children().length) <= 4) {
         $(".fav-user").append('<div class="fav-item"><span class="theme-name" id="' + themeName + '">' + themeName + '</span><span class="remove" id="' + userId + '">REMOVE<span></div>');
         $('#favorites').show();
         var size = $('body').css("font-size");
         var color = getComputedStyle(document.documentElement).getPropertyValue('--my-bg-main');
         var scolor = getComputedStyle(document.documentElement).getPropertyValue('--my-bg-second');
         var bodyClass = $('body').attr("class");
         var shape = getComputedStyle(document.documentElement).getPropertyValue('--my-shape');
         var fontHead = getComputedStyle(document.documentElement).getPropertyValue('--font-heading');
         var fontPara = getComputedStyle(document.documentElement).getPropertyValue('--font-paragraph');
         var savedStyle = new Styles(userId, themeName, size, color, scolor, bodyClass, shape, fontHead, fontPara);
         styles.push(savedStyle); 
         $('.theme-name').click(startTheme)
         $('.remove').click(deleteTheme)
       } else {
         messageBox("You can save up to 5 themes");
       }

     } else {
       messageBox("Please enter theme name");
     }
   })

 }

 /////// MESSAGE BOX //////////
 function messageBox(text) {

   $("#message-box")
     .css({
       marginTop: "0px",
       opacity: "1"
     });

   $("#message-box").text(text)
   setTimeout(function () {
     $("#message-box")

       .css({
         marginTop: "-80px",
         opacity: "0"
       })

   }, 4000)
 }


 ///// STARTING THEME //////
 function startTheme(el) {
   clearInterval(fadeInterval);
   $('body').css("background", "");
   el.preventDefault();
   styles.forEach(function (elem) {
     if (elem.style_name == el.target.id) {
       myStyles.styleSetter(elem.user_id, elem.style_name, elem.font_size, elem.main_color, elem.second_color, elem.bodyClass, elem.element_shape, elem.fontHeading, elem.fontParagraph)
     }
   })
 }

 ////// DELETING THEME //////
 function deleteTheme(el) {
   // styles.forEach(function (elem) {
   for (i = 0; i < styles.length; i++) {
     if (styles[i].style_name == el.target.previousSibling.id) { 
       styles.splice(i, 1);
       el.target.parentNode.parentNode.removeChild(el.target.parentNode);

       $("el.target.parentNode").hide();
     }
   }

   el.preventDefault();
 }



 ///////   WORK PREVIEW   ////////
 $(".work-preview").click(function (el) {
       // $(".work-preview").next().hide();
       $(el.target).next().slideDown();
       $('html, body').animate({
         scrollTop: $("#work-height").offset().top - 70 
       }, 2000);
       $(el.target).children(".diagonal-line1").css({
         width: "300px",
         left: "-50%",
         transform: "rotate(45deg)"
       })
       $(el.target).children(".diagonal-line2").css({
         width: "300px",
         left: "-50%",
         transform: "rotate(-45deg)"
       })
       $(el.target).addClass("visit-class");
       if ($(el.target).hasClass("agg")) {
         $(el.target).click(function () {
           window.open('https://www.aggios.com', '_blank')
         })
       }
       if ($(el.target).hasClass("can")) {
         $(el.target).click(function () {
           window.open('https://abrakadaba.github.io/cancan', '_blank')
         })
       }
       if ($(el.target).hasClass("rush")) {
         $(el.target).click(function () {
           window.open('https://abrakadaba.github.io/rush', '_blank')
         })
       }
       if ($(el.target).hasClass("trappo")) {
         $(el.target).click(function () {
           window.open('https://abrakadaba.github.io/trap', '_blank')
         })
       }
      })
      
/////// SKILLS  - VERTICAL POSITION /////
      function skillPosition(x) {
        if (x.matches) { // If media query matches
          $(".skill").click(function () {
            $('html, body').animate({
              scrollTop: $("#skills").offset().top ,
            }, 1500); 
          }) 
        }  else{
          console.log("uauuu");
          
          $(".skill").click(function (el) {
            $('html, body').animate({
              scrollTop: $(el.target).offset().top-220 ,
            }, 1000); 
          }) 
        }
      }
      
      var x = window.matchMedia("(max-width: 768px)")
      skillPosition(x) // Call listener function at run time
      x.addListener(skillPosition) // Attach listener function on state changes