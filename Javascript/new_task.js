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
	  input = htmlToElement(`<input type="checkbox" class="${element.key}" id="${element.key}" name="${element.key}"/>`);
	  checkboxes.push(input);
	  
	  var inputTh = htmlToElement('<td></td>');
	  inputTh.appendChild(input);

	  var weightInput = htmlToElement(`<input type="number" value="1" class="${element.key}_weight" id="${element.key}_weight" id="${element.key}_weight"/>`);
	  var weightTd = htmlToElement('<td></td>');
	  weightTd.appendChild(weightInput);

	  tr.appendChild(inputTh);
	  tr.appendChild(th);
	  tr.appendChild(weightTd);
	});
}


function handleGenerationClick(){
	const nameBox = document.getElementById('task_name_text');
	const pointBox = document.getElementById('task_points_text');
	const courseBox = document.getElementById('course_text');
	const weekBox = document.getElementById('week_of_task_text');
	const differentiationBox = document.getElementById('differentiation_of_background_text');
	const deliverablesBox = document.getElementById('deliverables_text');
	const commentBox = document.getElementById('additional_comments');
	const blueprintText = document.getElementById('task_blueprint_text').value;

	const enabledFeatures = [];
	checkboxes.forEach(
		checkbox => {
			if(checkbox.checked){
				const weightBox = document.getElementById(checkbox.id+'_weight')
				enabledFeatures.push(new EnabledFeature(checkbox.id, weightBox.valueAsNumber));
			}
		}
	);
	const deliverables = [];
	Array.from(deliverablesBox.options).forEach(
		option => {
			deliverables.push(new Deliverable(option.value, option.selected));
		}
	);
	if(enabledFeatures.length!=0){
		const task = new Task(nameBox.value, pointBox.value, courseBox.value, weekBox.value, differentiationBox.value, deliverables, enabledFeatures, commentBox.value, blueprintText);
		const json_task = JSON.stringify(task);
		download(nameBox.value+'.json', json_task);
	}
	else{
		makeToast("Please select at least one feature for your task");
	}
}


function handleToggleAll() {
	toggle(checkboxes);
}

function handleToggleBasic() {
	toggle(getFilteredCheckboxes('basic'));
}

function getFilteredCheckboxes(level) {
	var filteredCheckboxes = [];
	FEATURES.forEach(feature => {
		if (feature.level === level) {
			filteredCheckboxes.push(document.getElementById(feature.key));
		}
	})
	return filteredCheckboxes;
}

function handleToggleAdvanced() {
	toggle(getFilteredCheckboxes('advanced'));
}

function handleTogglePG() {
	toggle(getFilteredCheckboxes('procedural_guidance'));

}

function toggle(checkboxes) {
	var allEnabled = true;
	checkboxes.forEach(
		checkbox => {
			allEnabled &= checkbox.checked;
		}
	);

	checkboxes.forEach(
		checkbox => {
			checkbox.checked = !allEnabled;
		}
	);

}