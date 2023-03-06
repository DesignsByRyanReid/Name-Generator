
var firstName = ["James", "Robert", "John", "Michael", "David",
				"William", "Richard", "Joseph", "Thomas", "Charles", "Christopher",
				"Daniel", "Matthew", "Anthony","Mark","Donald","Steven",
				"Paul","Andrew","Joshua","Kenneth","Kevin","Brian","George",
				"Timothy","Ronald","Edward","Jason","Jeffrey","Ryan"];


var lastName = ["Smith", "Johnson", "Williams", "Brown", "Jones",
				"Garcia", "Miller", "Davis", "Rodriquez", "Martinez", "Hernandez",
				"Lopez", "Gonzalez", "Wilson","Anderson","Thomas","White",
				"Harris","Sanchez","Clark","Ramirez","Lewis","Robinson","Walker",
				"Young","Allen","King","Reid"];


function getName() {
	var randomName = firstName[Math.floor(Math.random() * firstName.length)] + ' '+ lastName[Math.floor(Math.random() * lastName.length)];
	return randomName;
}

function nameQty(){
	var userQty = document.querySelector('.qty').value;
	document.querySelector('.nameList').innerHTML = '';
	if (userQty > 10) {
		document.querySelector('.nameList').innerHTML = 'ONLY 10 NAMES CAN BE GENERATE';
	}
	else{
		for (var i = 0; i < userQty; i++) {
			document.querySelector('.nameList').innerHTML += getName() + '<br>';
		}
	}
}