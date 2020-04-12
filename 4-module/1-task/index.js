/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
	let ul = document.createElement('ul');

	for ( i=0; i < friends.length; i++ ) {
			let li = document.createElement('li');
			ul.appendChild(li)
			li.innerHTML = friends[i].firstName + ' ' + friends[i].lastName;	
		}

	return ul;
}