$(document).ready(function(){

/*$("#setProperties2").hide()*/

const storeRecord = {
	LYS: "a", 
	Temp: "b",
	salesForecast:"b",
	morningSales:"b",
	nightSales:"b",
	dailyTotalsSales:"b",
	lastWeekSales:"b",
	lastYearLabor:"b",
	laborForecast:"b",
	morningLabor:"b",
	nightLabor:"b",
	dailyLabor:"b",
	lastWeekLabor:"b",
	lastYearHours:"b",
	forecastHours:"b",
	morningHours:"b",
	nightHours:"b",
	dailyTotalsHours:"b",
	lastWeekHours:"b",
	WindowsDoors: "a",
	SmallwareWashed: "a",
	WalkinsOrganized: "a",
	TableChairsLightfixturesCleaned:"a",
	SmallLargeSidesCups:"a",
	Stockroomorganizedandcleaned:"a",
	BathroomsCleaned: "incomplete",
	FloorsCleaned: "incomplete",
	MopSinkCleaned: "incomplete",
	BeverageStationCleaned: "incomplete",
	MicrowaveCleaned: "incomplete",
	BatterStationCleaned: "incomplete",
	CashierCounterCleaned: "incomplete",
	IceMachineCleaned: "incomplete",
	FreezerCleaned: "incomplete",
	SaucesRefilled: "incomplete",
	Comp: "incomplete",
	FryerRefilled: "incomplete",
	SmalleWaresRefilled: "incomplete",
	Pans: "incomplete",
	BirdCage: "incomplete",
	SodaNozzlesCleaned: "incomplete",
	FloorDrainsCleaned: "incomplete",
	SoapRestocked: "incomplete",
	CertifyingManager: "",
	CertifyingManager1: "",
	CertifyingManager2: "",
	CoolerShelvesEmployee: "incomplete",
	CoolerShelvesManager: "incomplete",
	BiscuitOvenEmployee: "incomplete",
	BiscuitOvenManager: "incomplete",
	PrepAreaShelvesEmployee: "incomplete",
	PrepAreaShelvesManager: "incomplete",
	LobbyandRRFloorsEmployee: "incomplete",
	LobbyandRRFloorsManager: "incomplete",
	OrganizeOfficeEmployee: "incomplete",
	OrganizeOfficeManager: "incomplete",
	WalkinWallsEmployee: "incomplete",
	WalkinWallsManager: "incomplete",
	ReachinGasketsEmployee: "incomplete",
	ReachinGasketsManager: "incomplete",
	EvaporatorCoilsEmployee: "incomplete",
	EvaporatorCoilsManager: "incomplete",
	PolishSSEmployee: "incomplete",
	PolishSSManager: "incomplete",
	CleanHighchairsEmployee: "incomplete",
	CleanHighchairsManager: "incomplete",
	ReadyToEatSpicyTemp:0,
	ReadyToEatSpicyAC: 0,
	ReadyToEatSpicyInit:"",
	ReadyToEatMildTemp: 0,
	ReadyToEatMildAC: 0,
	ReadyToEatMildInit: "",
	ReadyToEatTenderTemp: 0,
	ReadyToEatTenderInit: 0,
	ReadyToEatTenderAC: "",
	ReadyToEatLTOTemp: 0,
	ReadyToEatLTOInit: 0,
	ReadyToEatLTOAC: "",
	cAC1: "",
	cInitials1: "",
	cTemp2: "",
	cAC2: "",
	cInitials2: "",
	cTemp3: "",
	cAC3: "",
	cInitials3: "",
	cTemp4: "",
	cAC4: "",
	cInitials4: "",
	cTemp5: "",
	cAC5: "",
	cInitials5: "",
	cTemp6: "",
	cAC6: "",
	cInitials6: "",
	cTemp7: "",
	cAC7: "",
	cInitials7: ""
}

 let theGooch = []
 let bigGooch

 const queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=07109,us&id=524901&APPID=6b4526dddac9fb5dfc5b7c699ccebe2d";
        const timeURL = "http://api.timezonedb.com/v2/get-time-zone?key=1GSEP2W1V3KQ&format=json&by=zone&zone=America/Chicago"        
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response) {
                console.log(response);
                console.log(JSON.stringify(response.weather));
                console.log(response.weather[0].description);
                console.log(response.weather[0].icon);
                const iconURL = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
                console.log(iconURL)
                $("#weatherApi").html("<img src='"+ iconURL + "'>" + response.weather[0].description);          
                //$("#weatherApi").text(response.weather[0].description);
            });
        $.ajax({
                url: timeURL,
                method: "GET"
            })
            .done(function(response) {
                console.log(response);
                console.log(response.formatted);
                $("#timeApi").text(response.formatted);
            });
   

	
	//LYS: $("#lastYearSales").val(),
	//LYS1: 


/*function writeToStore(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
};*/
/*const value1 = readFromStore('store1');
            const value2 = readFromStore('store2');

            console.log(value1);
            console.log(value2);

            function writeToStore(key, data) {
                localStorage.setItem(key, JSON.stringify(data));
            }*/

            function readFromStore(key) {
                return JSON.parse(localStorage.getItem(key));
            }


function writeToStore(key, data){
	localStorage.setItem(key, JSON.stringify(data));
};
function readFromStore(key) {
                return JSON.parse(localStorage.getItem(key));
};
function makeTable(){
	console.log("this works")
	for (let i = 0; i< abba.length; i += 2){
		$("#propegationBlock").append("<table><tr>"+abba[i]+"</tr></table>");
		
	};
	console.log("this works1111")
}

	//lastYearSales1 = $("#lastYearSales").val();
	 /*storeRecord.LYS = $("#lastYearSales").val();
	 storeRecord.salesForecast = $("#salesForecast").val();
	 storeRecord.morningSales = $("#morningSales").val();
	 storeRecord.nightSales = $("#nightSales").val();
	 storeRecord.dailyTotalsSales = $("#dailyTotalsSales").val();
	 storeRecord.lastWeekSales = $("#lastWeekSales").val();
	 storeRecord.lastYearLabor = $("#lastYearLabor").val();
	 storeRecord.laborForecast = $("#laborForecast").val();
	 storeRecord.morningLabor = $("#morningLabor").val();
	 storeRecord.nightHours = $("#nightHours").val();
	 storeRecord.dailyTotalsHours = $("#dailyTotalsHours").val();
	 storeRecord.lastWeekHours = $("#lastWeekHours").val();*/

	 /*$("#lastYearSales").val();
	 $("#salesForecast").val();
	 $("#morningSales").val();
	 $("#nightSales").val();
	 $("#dailyTotalsSales").val();
	 $("#lastWeekSales").val();
	 $("#lastYearLabor").val();
	 $("#laborForecast").val();
	 $("#morningLabor").val();
	 $("#nightHours").val();
	 $("#dailyTotalsHours").val();
	 $("#lastWeekHours").val();*/
	 
	$("#setProperties2").click(function() {
	 let goochi3
	 let goochi5
	let goochi4 = []
	let goochi = document.getElementsByTagName("input")
	let goochi2 = $("<input>").val()
	 let goochi1 = jQuery.makeArray(goochi);
	 for (let i = 0; i < goochi1.length; i++) {
	 	goochi3 = goochi1[i].value;
	 	console.log(goochi3)
	 	goochi5 =  goochi3.value
	 	console.log(goochi5)
	 	goochi4.push(goochi3);
	 	
	 	
	 

	 }

localStorage.setItem("theGooch", JSON.stringify(goochi4))

	console.log (goochi4)
	if ($("#ncdsa1").prop("checked")) {
		storeRecord.WindowsDoors = "Completed";
	};
	if ($("#ncdpd1").prop("checked")) {
		storeRecord.SmallwareWashed = "Completed";
	};
	if ($("#ncdbw1").prop("checked")) {
		storeRecord.WalkinsOrganized = "Completed";
	};
	if ($("#ncdsa2").prop("checked")) {
		storeRecord.TableChairsLightfixturesCleaned = "Completed";
	};
	if ($("#ncdpd2").prop("checked")) {
		storeRecord.SmallLargeSidesCups = "Completed";
	};
	if ($("#ncdbw2").prop("checked")) {
		storeRecord.Stockroomorganizedandcleaned = "Completed";
	};
	if ($("#ncdsa3").prop("checked")) {
		storeRecord.BathroomsCleaned = "Completed";
	};
	if ($("#ncdpd3").prop("checked")) {
		storeRecord.FloorsCleaned = "Completed";
	};
	if ($("#ncdbw3").prop("checked")) {
		storeRecord.MopSinkCleaned = "Completed";
	};
	if ($("#ncdsa4").prop("checked")) {
		storeRecord.BeverageStationCleaned = "Completed";
	};
	if ($("#ncdpd4").prop("checked")) {
		storeRecord.MicrowaveCleaned = "Completed";
	};
	if ($("#ncdbw4").prop("checked")) {
		storeRecord.BatterStationCleaned = "Completed";
	};
	if ($("#ncdsa5").prop("checked")) {
		storeRecord.CashierCounterCleaned = "Completed";
	};
	if ($("#ncdpd5").prop("checked")) {
		storeRecord.IceMachineCleaned = "Completed";
	};
	if ($("#ncdbw5").prop("checked")) {
		storeRecord.FreezerCleaned = "Completed";
	};
	if ($("#ncdsa6").prop("checked")) {
		storeRecord.SaucesRefilled = "Completed";
	};
	if ($("#ncdpd6").prop("checked")) {
		storeRecord.Comp = "Completed";
	};
	if ($("#ncdbw6").prop("checked")) {
		storeRecord.FryerRefilled = "Completed";
	};
	if ($("#ncdsa7").prop("checked")) {
		storeRecord.SmalleWaresRefilled = "Completed";
	};
	if ($("#ncdpd7").prop("checked")) {
		storeRecord.Pans = "Completed";
	};
	if ($("#ncdbw7").prop("checked")) {
		storeRecord.BirdCage = "Completed";
	};
	if ($("#ncdsa8").prop("checked")) {
		storeRecord.SodaNozzlesCleaned = "Completed";
	};
	if ($("#ncdpd8").prop("checked")) {
		storeRecord.FloorDrainsCleaned = "Completed";
	};
	if ($("#ncdbw8").prop("checked")) {
		storeRecord.SoapRestocked = "Completed";
	};
	if ($("#smi").prop("checked")) {
		storeRecord.CertifyingManager = "AG";
	};
	if ($("#scmi").prop("checked")) {
		storeRecord.CertifyingManager1 = "Vraj";
	};
	if ($("#cmi").prop("checked")) {
		storeRecord.CertifyingManager2 = "MSM";
	};
	if ($("#ccc1").prop("checked")) {
		storeRecord.CoolerShelvesEmployee = "Jeff";
	};
	if ($("#mcd1").prop("checked")) {
		storeRecord.CoolerShelvesManager = "Giranamo";
	};
	if ($("#ccc2").prop("checked")) {
		storeRecord.BiscuitOvenEmployee = "Jeff";
	};
	if ($("#mcd2").prop("checked")) {
		storeRecord.BiscuitOvenManager = "Giranamo";
	};
	if ($("#ccc3").prop("checked")) {
		storeRecord.PrepAreaShelvesEmployee = "Jeff";
	};
	if ($("#mcd3").prop("checked")) {
		storeRecord.PrepAreaShelvesManager = "Giranamo";
	};
	if ($("#ccc4").prop("checked")) {
		storeRecord.LobbyandRRFloorsEmployee = "Jeff";
	};
	if ($("#mcd4").prop("checked")) {
		storeRecord.LobbyandRRFloorsManager = "Giranamo";
	};
	if ($("#ccc5").prop("checked")) {
		storeRecord.OrganizeOfficeEmployee = "Jeff";
	};
	if ($("#mcd5").prop("checked")) {
		storeRecord.OrganizeOfficeManager = "Giranamo";
	};
	if ($("#ccc6").prop("checked")) {
		storeRecord.WalkinWallsEmployee = "Jeff";
	};
	if ($("#mcd6").prop("checked")) {
		storeRecord.WalkinWallsManager = "Giranamo";
	};
	if ($("#ccc7").prop("checked")) {
		storeRecord.ReachinGasketsEmployee = "Jeff";
	};
	if ($("#mcd7").prop("checked")) {
		storeRecord.ReachinGasketsManager = "Giranamo";
	};
	if ($("#ccc8").prop("checked")) {
		storeRecord.EvaporatorCoilsEmployee = "Jeff";
	};
	if ($("#mcd8").prop("checked")) {
		storeRecord.EvaporatorCoilsManager = "Giranamo";
	};
	if ($("#ccc9").prop("checked")) {
		storeRecord.PolishSSEmployee = "Jeff";
	};
	if ($("#mcd9").prop("checked")) {
		storeRecord.PolishSSManager = "Giranamo";
	};
	if ($("#ccc10").prop("checked")) {
		storeRecord.CleanHighchairsEmployee = "Jeff";
	};
	if ($("#mcd10").prop("checked")) {
		storeRecord.CleanHighchairsManager = "Giranamo";
	};
	console.log(storeRecord);
//writeToStore(storeRecord);
/*localStorage.setItem =  storeRecord.toString;*/
writeToStore("storeRecord", storeRecord);
console.log(goochi1);

});
let bbbb= "";
	let cccc = 0;
	let dddd;
	let checker = ["microphoneCheck1", "microphoneCheck12", "clapOnClapOff", "theClapper"];
$("#setProperties1").click(function(){
	
	
	/*for (let i = 0; i < checker.length; i++) {
		bbbb = checker[i];
		console.log(bbbb)
		dddd = $("#"+bbbb).val()
		let eeee = $("#microphoneCheck1")
		console.log(eeee)
		console.log(dddd)
		if (dddd > 0){
			cccc++
			console.log(dddd)
		}

	};*/
	$("#microphoneCheck1").html(1); 
	cccc++
	if (cccc > 3) {
		$("#setProperties2").show()
		console.log("its greater than three")
	}
});
$("#check1234").click(function(){
	
	let coochi = readFromStore("theGooch");
	console.log(coochi);

	for (let i = 0; i < coochi.length; i++){
		let goochiCoochi = coochi[i];
		let placeHolder= "1234"+i;
		console.log(goochiCoochi);
		console.log(placeHolder);
		$("#"+placeHolder).html("<div>"+goochiCoochi+"</div>")
		console.log(placeHolder)
	}
});
$("#check1235").click(function(){
	
	let coochi = readFromStore("thePooch");
	console.log(coochi);

	for (let i = 0; i < coochi.length; i++){
		let goochiCoochi = coochi[i];
		let placeHolder= "1234"+i;
		console.log(goochiCoochi);
		console.log(placeHolder);
		$("#"+placeHolder).html("<div>"+goochiCoochi+"</div>")
		console.log(placeHolder)
	}
});
$("#check1236").click(function(){
	
	let coochi = readFromStore("theHooch");
	console.log(coochi);

	for (let i = 0; i < coochi.length; i++){
		let goochiCoochi = coochi[i];
		let placeHolder= "1234"+i;
		console.log(goochiCoochi);
		console.log(placeHolder);
		$("#"+placeHolder).html("<div>"+goochiCoochi+"</div>")
		console.log(placeHolder)
	}
});
$("#check1237").click(function(){
	
	let coochi = readFromStore("theMooch");
	console.log(coochi);

	for (let i = 0; i < coochi.length; i++){
		let goochiCoochi = coochi[i];
		let placeHolder= "1234"+i;
		console.log(goochiCoochi);
		console.log(placeHolder);
		$("#"+placeHolder).html("<div>"+goochiCoochi+"</div>")
		console.log(placeHolder)
	}
});
$("#clear").click(function(){
	
	

	for (let i = 0; i < 200; i++){
		
		let placeHolder= "1234"+i;
		
		$("#"+placeHolder).html("<div>..</div>")
		console.log(placeHolder)
	}
	//console.log(storeRecord);
	//abba = readFromStore(storeRecord);
	//console.log(abba);
	//$("#propegationBlock").html(abba);
	//makeTable(); 
	//
});

/*$("#check1234").click(function(){
	for ()
});*/

$("#setProperties3").click(function(){
	$("#microphoneCheck1").html(1); 
	cccc++
	if (cccc > 3) {
		$("#setProperties2").show()
		console.log("its greater than three")
	}
	 /*let goochi3
	 let goochi5
	
	let goochi = document.getElementsByTagName("input")
	let goochi2 = $("<input>").val()
	 let goochi1 = jQuery.makeArray(goochi);
	 for (let i = 0; i < goochi1.length; i++) {
	 	goochi3 = goochi1[i].value;
	 	goochi5 =  goochi3.value
	 	goochi4.push(goochi3);
	 	
	 	
	 

	 }

localStorage.setItem("theGooch", JSON.stringify(goochi4))

	console.log (goochi4)*/
	
	//lastYearSales1 = $("#lastYearSales").val();
	storeRecord.Temp = $("#cTemp1").val();
	storeRecord.ReadyToEatSpicyTemp = $("#recTemp1").val();
	storeRecord.ReadyToEatSpicyAC = $("#recAC1").val();
	storeRecord.ReadyToEatSpicyInit = $("#recInitials1").val();
	storeRecord.ReadyToEatMildTemp = $("#recTemp2").val();
	storeRecord.ReadyToEatMildAC = $("#recAC2").val();
	storeRecord.ReadyToEatMildInit = $("#recInitials2").val();
	storeRecord.ReadyToEatTenderTemp = $("#recTemp3").val();
	storeRecord.ReadyToEatTenderAC = $("#recAC3").val();
	storeRecord.ReadyToEatTenderInit = $("#recInitials3").val();
	storeRecord.ReadyToEatLTOTemp = $("#recTemp4").val();
	storeRecord.ReadyToEatLTOAC = $("#recAC4").val();
	storeRecord.ReadyToEatLTOInit = $("#recInitials4").val();
	storeRecord.cAC1 = $("#cAC1");
	storeRecord.cInitials1 = $("#cInitials1");
	storeRecord.cTemp2 = $("#cTemp2");
	storeRecord.cAC2 = $("#cAC2");
	storeRecord.cInitials2 = $("#cInitials2");
	storeRecord.cTemp3 = $("#cTemp3");
	storeRecord.cAC3 = $("#cAC3");
	storeRecord.cInitials3 = $("#cInitials3");
	storeRecord.cTemp4 = $("#cTemp4");
	storeRecord.cAC4 = $("#cAC4");
	storeRecord.cInitials4 = $("#cInitials4");
	storeRecord.cTemp5 = $("#cTemp5");
	storeRecord.cAC5 = $("#cAC5");
	storeRecord.cInitials5 = $("#cInitials5");
	storeRecord.cTemp6 = $("#cTemp6");
	storeRecord.cAC6 = $("#cAC6");
	storeRecord.cInitials6 = $("#cInitials6");
	storeRecord.cTemp7 = $("cTemp7");
	storeRecord.cAC7 = $("#cAC7");
	storeRecord.cInitials7 = $("#cInitials7");

	

	//LYS1: 

	
});

$("#setProperties4").click(function(){
	$("#microphoneCheck1").html(1); 
	cccc++
	if (cccc > 3) {
		$("#setProperties2").show()
		console.log("its greater than three")
	}
	/*$("topIntro1").html(storeRecord.storeRecord.Temp)*/
});


console.log(storeRecord);
$("#sendRecord6").click(function(){
	let goochi3
	 let goochi5
	let goochi4 =[]
	let goochi = document.getElementsByTagName("input")
	let goochi2 = $("<input>").val()
	 let goochi1 = jQuery.makeArray(goochi);
	 for (let i = 0; i < goochi1.length; i++) {
	 	goochi3 = goochi1[i].value;
	 	goochi5 =  goochi3.value
	 	goochi4.push(goochi3);
	 	
	 	
	 

	 }

localStorage.setItem("theHooch", JSON.stringify(goochi4))
	
});
$("#vvvv").click(function(){
	$("#microphoneCheck1").html(1); 
	cccc++
	if (cccc > 3) {
		$("#setProperties2").show()
		console.log("its greater than three")
	}
});
$("#sendRecord5").click(function(){
	let goochi3
	 let goochi5
	let goochi4 =[]
	let goochi = document.getElementsByTagName("input")
	let goochi2 = $("<input>").val()
	 let goochi1 = jQuery.makeArray(goochi);
	 for (let i = 0; i < goochi1.length; i++) {
	 	goochi3 = goochi1[i].value;
	 	goochi5 =  goochi3.value
	 	goochi4.push(goochi3);
	 	
	 	
	 

	 }

localStorage.setItem("thePooch", JSON.stringify(goochi4))
	
});
$("#sendRecord7").click(function(){
	let goochi3
	 let goochi5
	let goochi4 =[]
	let goochi = document.getElementsByTagName("input")
	let goochi2 = $("<input>").val()
	 let goochi1 = jQuery.makeArray(goochi);
	 for (let i = 0; i < goochi1.length; i++) {
	 	goochi3 = goochi1[i].value;
	 	goochi5 =  goochi3.value
	 	goochi4.push(goochi3);
	 	
	 	
	 

	 }

localStorage.setItem("theMooch", JSON.stringify(goochi4))
	
});



});