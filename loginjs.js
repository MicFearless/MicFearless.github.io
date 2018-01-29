$(document).ready(function() {
let managerIds = [ 
1234,
1235,
1236,
1237,
5555
];

let inputID;


$("#letsSeeWhoYouBe").click(function() {
	inputID=$("#creds").val(); 
	if (inputID == managerIds[0]) {
		document.location.href = "trial14.html"
	}
	if (inputID == managerIds[1]) {
		document.location.href = "page1235.html"
	}
	if (inputID == managerIds[2]) {
		document.location.href = "page1236.html"
	}
	if (inputID == managerIds[3]) {
		document.location.href = "page1237.html"
	}
	if (inputID == managerIds[4]) {
		document.location.href = "regional_manager_trial11.html"
	}
  //alert("Handler for .click() called.");
  /*console.log(inputID)
  for (let i= 0; i<managerIds.length; i++) {
  	if (inputID == managerIds[i]){
  		document.location.href = "trial11.html"
  	}
   }*/
});
});
