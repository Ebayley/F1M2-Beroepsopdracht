//----------------------------- Nav ----------------------------------------

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function secondFunction(a) {
  a.classList.toggle("change");
}

//----------------------------- Collection ------------------------------------

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

//---------------------------- Reviews --------------------------------------

$(document).ready(function () {
	$('.testiSlide').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: [{
			breakpoint: 850,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		}]
	});
});

//------------------------- Back to top button -----------------------------

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



//-------------------------- Quiz ------------------------------------------------


var numQues = 5;
        
var numChoi = 3;

var answers = new Array(5);

//---- antwoorden ----
answers[0] = "Rembrandt"; 
answers[1] = "Het Offer van Abraham";
answers[2] = "Abstracte kunstwerken";
answers[3] = "Rood";
answers[4] = "Een museum met jouw interesses";
answers[5] = "";


function getScore(form) {
    showCorrectAnswers();

  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
        break;
        }
      }
    }
  }
  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  
  form.solutions.value = correctAnswers;
}

function showCorrectAnswers() {
    var q1Inputs = document.querySelectorAll('.q1-inputs input');
    var correctAnswer = document.querySelector('.q1-inputs span');
    var correct = correctAnswer.textContent;
    q1Inputs.forEach(function(element) {
        if (element.checked) {
            if (element.value !== correct) {
                correctAnswer.classList.remove('hidden');
            } else {
                correctAnswer.classList.add('hidden');
            }
        }
    });
}

//-------------------------------------  End -----------------------------------------