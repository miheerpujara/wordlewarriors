const accordionlabel = document.getElementsByClassName('accordion-label');

for (i=0; i<accordionlabel.length; i++){
	accordionlabel[i].addEventListener('click', function() {
		this.parentElement.classList.toggle('open')
	})
}