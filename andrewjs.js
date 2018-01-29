$(document).ready(function() {

	// Object of tasklists
	const task = [
		"Oberserved Team Member properly washing hands; coached as needed",
		"Are hands washed before and after wearing gloves?",
		"Do handwashing sinks have: soap, hot/cold water and disposable paper towels",
		"Are disposable gloves available and being worn properly?",
		"Proper hair restraints worn in food service area?",
		"Is the sanitizer solution in the three compartment sink 200 PPM?",
		"Is the sanitizer solution in the sanitizer bucket 200 PPM?",
		"All chemicals are labeled and properly stored?",
		"Observed Team members eating, drinking, smokeing, chewing gum in food service area?",
		"Is food temperature being checked when being brought into service?",
		"Is all food stored properly (labeled, rotated, 6 inches above the ground)?",
		"Has Any Team Member been ill in the last 24 hours (Who)?",
		"Ice scoop used and properly stored?",
		"Have you noticed any pest or rodent activity?",
		"Additional coaching needed: "
	]

	// Loop through each element in task and create table row for 
	task.forEach(function(t){
		
		// Creating div/writing to display task data
		const taskDiv = $("<tr class='table-bordered'>");
		taskDiv.text(t);

		// Creating div/checkbox for yes column
		const yesBox = $("<td>");
		taskDiv.append(yesBox);
		const yes = $("<input type='checkbox' id='yes'>")
		yesBox.append(yes);

		// Creating div/checkbox for no column
		const noBox = $("<td>")
		taskDiv.append(noBox);
		const no = $("<input type='checkbox' id='no'>")
		noBox.append(no);

		// Creating div/input box
		const inputBox = $("<td>");
		taskDiv.append(inputBox);
		const boxInput = $("<input>")
		inputBox.append(boxInput)

		// Append taskDiv to tableData div
		$("#tableData").append(taskDiv);
	})

	// Creating button div
	const saveButton = $("<button type='submit'>")

	// Adding text to button
	saveButton.text("Save")

	// Adding button below table data
	$("#buttonDiv").append(saveButton)
})