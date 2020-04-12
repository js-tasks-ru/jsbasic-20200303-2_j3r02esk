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