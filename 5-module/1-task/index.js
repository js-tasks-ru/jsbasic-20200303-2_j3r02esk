/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

	for ( i=1; i < table.rows.length; i++ ) {
		let age		= table.rows[i].cells[1];
		let gender	= table.rows[i].cells[2];
		let status	= table.rows[i].cells[3];


		if (age.innerHTML < 18)							age.parentElement.setAttribute('style', 'text-decoration: line-through');
		if (gender.innerHTML == 'm')					gender.parentElement.classList.add('male');
		if (gender.innerHTML == 'f')					gender.parentElement.classList.add('female');
		if (status.dataset.available == 'true')			status.parentElement.classList.add('available');
		if (status.dataset.available == 'false')		status.parentElement.classList.add('unavailable');
		if (status.dataset.available == undefined)		status.parentElement.setAttribute('hidden', '');

	}
	
}


function highlight(table) {
   let elements = table.querySelectorAll(' tr > td:last-child');
   for (let i = 1; i < table.rows.length; i++) {
      if (elements[i].dataset.available === 'true') {
         table.rows[i].classList.add('available');
      }
      else if (elements[i].dataset.available === 'false') {
         table.rows[i].classList.add('unavailable');
      }
      else if
         (elements[i].hasAttribute('data-available') === false) {
         table.rows[i].hidden = true;
      }
   }
   for (let i = 1; i < table.rows.length; i++) {
      if (table.rows[i].cells[2].innerHTML === 'm') {
         table.rows[i].classList.add('male');
      } else {
         table.rows[i].classList.add('female');
      }
   }
   for (let i = 1; i < table.rows.length; i++) {
      if (table.rows[i].cells[1].innerHTML < '18') {
         table.rows[i].style.textDecoration = 'line-through';
      }
   }
}