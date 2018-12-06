var myHeading=document.querySelector('h1');
var myButton=document.querySelector('button');

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/bread.png');
    } else {
      myImage.setAttribute ('src','images/gluten_free.png');
    }
}

function setUserName(){
	var myName=prompt('Please enter your name');
	localStorage.setItem('name',myName);
	myHeading.textContent='Do you have gluten intolerance?'+myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName=localStorage.getItem('name');
	myHeading.textContent='Do you have gluten intolerance?'+storedName;
}

myButton.onclick=function(){
	setUserName();
}

