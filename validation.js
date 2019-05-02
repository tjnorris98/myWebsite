function validate1() {
    valCheck = true;
    var image1 = getImage(alphaNumCheck(document.forms["contactForm"]["firstname"].value),"user_name");
    document.getElementById("Firstname").appendChild(image1);
}
function validate2(){
	valCheck2 = true;
	var image2 = getImage(alphaNumCheck2(document.forms["contactForm"]["lastname"].value),"lastname");
	document.getElementById("Lastname").appendChild(image2);
}




function alphaNumCheck(firstname) {
	let regex = /^[a-z]+$/i;
	var i;
    for(i =0; i<firstname.length; i++){
		if(!(firstname.charAt(i).match(regex)))
		{
			return false;
		}
		
	}
	return true;
}
function alphaNumCheck2(lastname) {
	let regex = /^[a-z]+$/i;
	var j;
    for(j =0; j<lastname.length; j++){
		if(!(lastname.charAt(j).match(regex)))
		{
			return false;
		}
	}	
	return true;
}
function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}