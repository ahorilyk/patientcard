function dates()
{
	
	var days = ["нд","пн","вт","ср","чт","пт","сб"];
	
	for (var i=0; i<14; i++){
		
		// Запис дат на два тижні

		var d = new Date();

		var newDiv = document.createElement("DIV");

		var newDate = ("0" + d.getDate(d.setDate(d.getDate()+i))).slice(-2);

		var newMounth = ("0" +(d.getMonth()+1)).slice(-2);

		var text = document.createTextNode(newDate + "." + 
			newMounth  + ". " + days[d.getDay()]);
		
		newDiv.appendChild(text);

		document.getElementById("dates").appendChild(newDiv);
		
		// Друк чекбоксів для доктор і сестри

		var newDiv2 = document.createElement("DIV");
		var newCheckbox = document.createElement("INPUT");
		newCheckbox.type = "checkbox";
		newCheckbox.name = newDate + "." + newMounth + "doc";

		var newCheckbox2 = document.createElement("INPUT");
		newCheckbox2.type = "checkbox";
		newCheckbox2.name = newDate + "." + newMounth + "sist"
		newDiv2.appendChild(newCheckbox);
		newDiv2.appendChild(newCheckbox2);
		document.getElementById("checks").appendChild(newDiv2);

		//newCheckbox.id = "id";
	}
	
}
/*
function checks()
{
	
	for (var i=0; i<14; i++){

		


		var newDate = ("0" + d.getDate(d.setDate(d.getDate()+i))).slice(-2);

		var newMounth = ("0" +(d.getMonth()+1)).slice(-2);

		var text = document.createTextNode(newDate + "." + 
			newMounth  + ". " + days[d.getDay()]);
		
		newDiv.appendChild(text);

		document.getElementById("dates").appendChild(newDiv);

	}
	
}

//setDate(d.getDate() + i)
*/