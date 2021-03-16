var allCards = [];
	
if (localStorage.allCards !== undefined) {
	allCards = JSON.parse(localStorage.allCards);
}

var oneCard ={};
var checkAt = false;
var checkNum = false;
var checkLastNum=true;
var checkNumFrom = ["0","1","2","3","4","5","6","7","8","9","-"," ",];

copyCards();

function saveCard() {
	
	let name=document.getElementById("name");
	let phone=document.getElementById("phone");
	let email=document.getElementById("email");
	let address=document.getElementById("address");
	for (let i=0;i<email.value.length;i++) {
		if (email.value[i]=="@") {checkAt=true;break;}
	}
	
			checkLastNum=true;

		for (let i=0;i<phone.value.length;i++) {
			
			for (let j=0;j<checkNumFrom.length;j++) {
		if (phone.value[i]==checkNumFrom[j]) {checkNum=true;break;}else{if (j==checkNumFrom.length-1) {checkLastNum=false;}}
	} 
}
	
	if (name.value==""||phone.value==""||email.value==""||address.value=="") {
		alert("Do not leave MT form");}
		else {
		if (!checkAt) { alert("You need @ in the email place");}
			else {
			if (!checkNum||!checkLastNum) {
				alert("Type only numbers in the phone place");}
				else {
				
oneCard = {
	name: name.value,
	phone: phone.value,
	email: email.value,
	address: address.value
}
	
allCards.push(oneCard);
localStorage.setItem("allCards", JSON.stringify(allCards));
	name.value = "";
	phone.value= "";
	email.value= "";
	address.value= "";
		checkAt=false;
		checkNum=false;
	copyCards();
}}}
}

function copyCards() {
		document.getElementById("cards").innerHTML ="";

for (let i=0; i<allCards.length ;i++) {
var node = document.createElement("div");               
	node.classList.add("card");
		document.getElementById("cards").appendChild(node);  

	var addH3 =  document.createElement("h3");
	var addP1 =  document.createElement("p");
	var addP2 =  document.createElement("p");
	var addP3 =  document.createElement("p");
	var addbutton =  document.createElement("button");

	document.getElementsByClassName("card")[i].appendChild(addH3);  
	document.getElementsByClassName("card")[i].appendChild(addP1);  
	document.getElementsByClassName("card")[i].appendChild(addP2);  
	document.getElementsByClassName("card")[i].appendChild(addP3);  
	document.getElementsByClassName("card")[i].appendChild(addbutton);  

		addH3.innerHTML = allCards[i].name;
		addP1.innerHTML="☎️ "+allCards[i].phone;
		addP2.innerHTML="📧 " + allCards[i].email;
		addP3.innerHTML="🏠 " + allCards[i].address;
	addbutton.innerHTML="X";
	addbutton.setAttribute("id",("del"+i));

	
	document.getElementById("del"+i).addEventListener("click",function(i){
		allCards.splice(i,1);
		localStorage.setItem("allCards", JSON.stringify(allCards));
		copyCards();
	});

	}
}

document.getElementById("register").addEventListener("click",saveCard);
