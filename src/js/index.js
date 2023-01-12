import CardContainerWc from './wc/projects/card-container-wc';
import ImageContainerWc from './wc/projects/image-container-wc';
import FigureWc from './wc/projects/figure-wc';
import CardWc from './wc/projects/card-wc';
import HeaderWc from './wc/header-wc';
import ProjectCardWc from './wc/home-page/project-card-wc';
import ProjectSectionWc from './wc/projects/section-wc';
import HeaderSectionWc from './wc/projects/header-section-wc';

import FooterWc from './wc/footer-wc';


// Get the modal
var modal = document.querySelector('.modal');
var modalImg = modal.querySelector('.modal-content');
var captionText = modal.querySelector('#caption');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var figures = document.querySelectorAll('figure-wc[single]');

// Get body to disable scrolling when the modal is open
var body = document.querySelector('body');
console.log(figures);
figures.forEach(figure => {
	if (figure.querySelector('img')) {
		var imgSource = figure.querySelector('img').src;
		console.log(figure);
		figure.onclick = function(){
			body.classList.toggle('no-scroll');
			modal.style.display = 'block';
			console.log(imgSource);
			modalImg.src = imgSource;
			captionText.innerHTML = document.querySelector('figure-wc span').textContent;
		};
	}
});



// Get the <span> element that closes the modal
var span = document.querySelector('.close');

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = 'none';
	body.classList.toggle('no-scroll');
};