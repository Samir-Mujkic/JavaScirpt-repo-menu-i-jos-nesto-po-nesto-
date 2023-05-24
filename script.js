//Responsive Menu

const mobileMenu = () => {
	let menu = document.querySelector('.header ul');
	let btn = document.querySelector('.header button');

	if (btn.innerText === 'MENU') {
		menu.style.display = 'block';
		btn.innerText = 'CLOSE';
		
	} else  {
		menu.style.display = 'none';
		btn.innerText = 'MENU';
		
	}

	



	

};

//Slider radnja

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');
let imgNum = 0;



rightBtn.addEventListener('click', () => {
	displayNone();
	imgNum++;
	if(imgNum === pictures.length) {
		imgNum = 0;
	}
	pictures[imgNum].style.display = 'block';

})

leftBtn.addEventListener('click', () => {
	displayNone();
	imgNum--;
	if(imgNum === -1) {
		imgNum = pictures.length -1;
	}
    pictures[imgNum].style.display = 'block';
})

const displayNone = () => {
	elements.forEach((img) => {
		img.style.display = 'none';

	})

}

//Portfolio filter

const portfolioSort = (button) => {
	let category = button.getAttribute('data-category');

   let portfolioitems = document.querySelectorAll('.portfolio-single-item');

   portfolioitems.forEach((item) =>{


   	item.style.display = 'none';
   	});

   if(category === 'sve') {
   	portfolioitems.forEach((item) =>{


   	item.style.display = 'block';
   	});

   }

   portfolioitems.forEach((item) => {
   	if(item.getAttribute('data-category').includes(category)) {
   		item.style.display = 'block';

   	}
   });
}

const openModal = () => {

	let modal = document.querySelector('.popup-modal');
	modal.style.display = 'block';

	let overlay = document.querySelector('.overlay');
	overlay.style.display = 'block';






}

const closeModal = () => {

		let modal = document.querySelector('.popup-modal');
	modal.style.display = 'none';

	let overlay = document.querySelector('.overlay');
	overlay.style.display = 'none';

}