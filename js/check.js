function addNomineesCheck () {
	var user1 = document.getElementById("user1").value;
	var user2 = document.getElementById("user1").value;
	var user3 = document.getElementById("user1").value;
	var user4 = document.getElementById("user1").value;

	if((user1 != user2) && (user2 != user3) && (user3 != user4) && (user4 != user1)){
		return true;
	}
	alert("All nominees have to be different!!");
	return false;
	
}