// countdown timer in first-section
function count_down(){
		  countDown = new Date('March 5, 2021').getTime(),
		  now = new Date().getTime(),
		  gap = countDown - now,
	  
		  second = 1000,
		  minute = second * 60, 	 
		  hour = minute * 60,
		  day = hour * 24,
	  
		  d = Math.floor(gap / (day)),
		  h = Math.floor((gap % (day)) / (hour)),
		  m = Math.floor((gap % (hour)) / (minute)),
		  s = Math.floor((gap % (minute)) / (second)),

		  d_day = document.querySelector('#day'),
		  d_hour = document.querySelector('#hour'),
		  d_min = document.querySelector('#min'),
		  d_sec = document.querySelector('#sec');
		  
		  d_day.innerHTML = d;
		  d_hour.innerHTML = h;
		  d_min.innerHTML = m;
		  d_sec.innerHTML = s;
  
   if(gap <= 0 ) {
     countDown = document.querySelector('.countdown');
     content.innerHTML = text;
    } 
}

setInterval(function(){
  count_down();
},1000);

// image changer		 
var animImage = document.getElementById("animate-image");

var imageArray = ["./img/banners/godzilla-sneakers_1.jpg", "./img/banners/godzilla-sneakers_2.jpg", "./img/banners/godzilla-sneakers_3.jpg", "./img/banners/godzilla-sneakers_4.jpg" ] 
var imageIndex = 0;

function changeImage() {
  animImage.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}  
setInterval(changeImage,1000);

// slider  
		var mySwiper = new Swiper( '.swiper-container', { 
		  loop: true, 
		  autoplay: true,
		  navigation: {
			nextEl: '.swiper-button-next', 
			prevEl: '.swiper-button-prev',
		  },
			slidesPerView: '2',
		  effect: 'slide'
		});
