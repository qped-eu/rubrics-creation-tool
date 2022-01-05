function load() {
  setTable();
}

const checkboxes = [];

function setTable(){
	var tableBody = document.getElementById('rubrics_table');
	tableBody.innerHTML = "";
	FEATURES.forEach(
    element => {
      var tr = htmlToElement('<tr/>')
      tableBody.appendChild(tr);

      var th = htmlToElement(
        '<td class="first_col">' +
          element.name +
        '</td>');
	  input = htmlToElement(`<input type="checkbox" class="${element.key}" id="${element.key}" name=id="${element.key}"/>`);
	  checkboxes.push(input);
	  
	  var inputTh = htmlToElement('<td></td>');
	  inputTh.appendChild(input);
	  tr.appendChild(inputTh);
	  tr.appendChild(th);
	});
}


function handleGenerationClick(){
	var nameBox = document.getElementById('task_name_text');
	var pointBox = document.getElementById('task_points_text');
	var courseBox = document.getElementById('course_text');
	var weekBox = document.getElementById('week_of_task_text');
	var differentiationBox = document.getElementById('differentiation_of_background_text');
	var deliverablesBox = document.getElementById('deliverables_text');
	var commentBox = document.getElementById('additional_comments');

	var enabledFeatures = [];
	checkboxes.forEach(
		checkbox => {
			if(checkbox.checked){
				enabledFeatures.push(checkbox.id);
			}
		}
	);
	var deliverables = [];
	Array.from(deliverablesBox.options).forEach(
		option => {
			deliverables.push(new Deliverable(option.value, option.selected));
		}
	);
	if(enabledFeatures.length!=0){
		var task = new Task(nameBox.value, pointBox.value, courseBox.value, weekBox.value, differentiationBox.value, deliverables, enabledFeatures, commentBox.value);
		console.log(task);
		var json_task = JSON.stringify(task);
		download(nameBox.value+'.json', json_task);
	}
	else{
		makeToast("Please select at least one feature for your task");
	}
}