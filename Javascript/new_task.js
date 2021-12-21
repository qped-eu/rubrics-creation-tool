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
	var instituteBox = document.getElementById('institute_text');
	var nameBox = document.getElementById('task_name_text');
	var pointBox = document.getElementById('task_points_text');
	var commentBox = document.getElementById('additional_comments');
	
	var enabledFeatures = [];
	checkboxes.forEach(
		checkbox => {
			if(checkbox.checked){
				enabledFeatures.push(checkbox.id);
			}
		}
	);
	if(enabledFeatures.length!=0){
		var task = new Task(nameBox.value, pointBox.value, instituteBox.value, enabledFeatures, commentBox.value);
		console.log(task);
		var json_task = JSON.stringify(task);
		download(nameBox.value+'.json', json_task);
	}
	else{
		makeToast("Please select at least one feature for your task");
	}
}