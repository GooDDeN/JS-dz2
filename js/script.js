var arr = [];

var name1 = prompt('Введите первое имя', "")
var name2 = prompt('Введите второе имя', "")
var name3 = prompt('Введите третье имя', "")
var name4 = prompt('Введите четвертое имя', "")
var name5 = prompt('Введите пятое имя', "")
	
	arr.push(name1, name2, name3, name4, name5); 

var name = prompt('Введите имя пользователя', "");

	if (name == name1) {
		alert( name + ', Вы успешно вошли');	
	} else if (name == name2) {
		 alert( name + ', Вы успешно вошли')
	} else if (name == name3) {
		 alert( name + ', Вы успешно вошли')
	} else if (name == name4) {
		 alert( name + ', Вы успешно вошли')
	} else if (name == name5) {
		 alert( name + ', Вы успешно вошли')
	} else{
		 alert( 'Неправильное имя пользователя')
	}



	console.log(arr)
