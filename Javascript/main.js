const MAX_SCORE = 4;
const scoreInputs = new Map();
const failExInputs = new Map();
const passExInputs = new Map();
const notEnteredInputs = new Map();
const disabledInputs = new Map();
var tasks;
var task;

function appendExamples(tr, category, featureKey, examples, examplesMap) {
  const examplesDomElements = [];
  examplesMap.set(featureKey, examplesDomElements);

  const td = htmlToElement('<td/>');
  const ul = htmlToElement('<ul/>');
  td.appendChild(ul);

  examples.forEach(
  example => {
    li = htmlToElement('<li/>');
    ul.appendChild(li);
    
	ulEx = htmlToElement('<ul/>');
    liEx = htmlToElement('<li/>');
    ulEx.appendChild(liEx);
    
    label = htmlToElement('<label/>');
    li.appendChild(label);
	li.appendChild(ulEx);

    input = htmlToElement(`<input type="checkbox" class="${category}_example" id="${featureKey}_${category}_${example.Key}" name=id="${featureKey}_${category}_${example.key}" onChange="examplesChange('${featureKey}')"/>`);
    label.appendChild(input);
    label.appendChild(htmlToElement(example.desc));
	
	descDiv = htmlToElement('<div/>');
	descDiv.appendChild(htmlToElement(example.desc_long));
	descDiv.className = "descLongDiv";
	liEx.appendChild(descDiv);

    examplesDomElements.push(input);
  });

  tr.appendChild(td);
}

function load() {
  //localStorage.clear();
  let dropArea = document.getElementById('fileDragOverField');
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  });
  ['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
  });
  dropArea.addEventListener('drop', handleDrop, false);
  let tasksJSON = localStorage.getItem('all_tasks');
  if(tasksJSON == null){
	  localStorage.setItem('all_tasks', JSON.stringify(new Array()));
  }
  tasks = JSON.parse(localStorage.getItem('all_tasks'));
  if(tasks.length==0){
	setTable([], false);
	reset();  
  }
  else{
	setTask(tasks.length - 1);	
	updateTaskList();
  }
}

function setTask(index){
	task = tasks[index];
	setTable(task.rubricSet,true);
	let selectedTask = document.getElementById("selected_task");
	selectedTask.innerHTML = task.name;
	let taskPoints = document.getElementById("task_points");
	taskPoints.value="0";
	let taskCalcPoints = document.getElementById("task_calc_points");
	taskCalcPoints.value="";
	let taskMaxPoints = document.getElementById("task_max_points");
	taskMaxPoints.value=task.maxPoints;
	reset();
}

function updateTaskList(){
	let taskList = document.getElementById("task_list");
	taskList.innerHTML = "";
	for(let i = 0; i<tasks.length;i++){
		let li = htmlToElement('<li></li>');
		let task = tasks[i];
		li.innerHTML = task.name;
		li.setAttribute("onclick","setTask("+i+");");
		taskList.appendChild(li);
	}
}

function highlight(e) {
  e.target.classList.add('highlight');
}

function unhighlight(e) {
  e.target.classList.remove('highlight');
}

function reset() {  
  for (let domElement of notEnteredInputs.values()) {
      domElement.checked = true;
  }

  for (let domElement of disabledInputs.values()) {
      domElement.checked = false;
  }

  for (let domElements of scoreInputs.values()) {
      domElements[2].checked = true;
  }

  for (let domElements of failExInputs.values()) {
    domElements.forEach( element => element.checked = false);
  }

  for (let domElements of passExInputs.values()) {
    domElements.forEach( element => element.checked = false);
  }

}

function handleFeedbackButtonClick(){
	var feedbackField = document.getElementById('feedback_text');
	feedbackField.value = 'Kryptonite!';
}

function handleExportButtonClick(){
	if(task==undefined){
		makeToast("Please select a task before trying to export one.");
	}
	else{
		var dataField = document.getElementById('data_text');
		dataField.value = JSON.stringify(task);
	}
}

function handleNextStudentButtonClick(){
	var feedbackField = document.getElementById('feedback_text');
	feedbackField.value = '';
	reset();
}

function handleTextAreaClick(textarea, text){
	/* Select the text field */
	textarea.select();
	textarea.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	navigator.clipboard.writeText(textarea.value);

	/* Alert the copied text */
	makeToast('Copied '+text+' to clipboard!')
}


function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;

  handleFiles(files);
}

function handleFiles(files){
	var reader = new FileReader();
	reader.onload = function(){
		var dataURL = reader.result;
		var task = JSON.parse(dataURL);
		tasks.push(task);
		setTask(tasks.length - 1);
		updateTaskList();
		localStorage.setItem('all_tasks', JSON.stringify(tasks));
	};
	reader.readAsText(files[0]);
}

function handleToolTippToggle(checkbox){
	let tableBody = document.getElementById("rubrics_table");
	if(checkbox.checked){
		tableBody.classList.remove("hideToolTipps");
		tableBody.classList.add("showToolTipps");
	}
	else{
		tableBody.classList.remove("showToolTipps");
		tableBody.classList.add("hideToolTipps");
	}
}

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function dropHandler(e) {

  e.stopPropagation();
  e.preventDefault();
  var files = e.dataTransfer.files; // Array of all files
}

function dragOverHandler(e) {
   e.stopPropagation();
   e.preventDefault();
   e.dataTransfer.dropEffect = 'copy';
}

function setTable(enabledFeatures, filter){
	var tableBody = document.getElementById('rubrics_table');
	tableBody.innerHTML = "";
	FEATURES.forEach(
    element => {
	  if(!filter||enabledFeatures.includes(element.key)){
      var tr = htmlToElement('<tr/>')
      tableBody.appendChild(tr);

      var th = htmlToElement(
        '<td class="first_col">' +
          element.name +
        '</td>');


      // row header
      const notEntered = htmlToElement(`<input type="hidden" checked name="${element.key}_not_entered" id="${element.key}_not_entered" value="true">`);
      notEnteredInputs.set(element.key, notEntered);
      th.appendChild(notEntered);

      const disabled = htmlToElement(`<input type="hidden" checked name="${element.key}_disabled" id="${element.key}_disabled" value="true">`);
      disabledInputs.set(element.key, disabled);
      th.appendChild(disabled);

      tr.appendChild(th);

      // negative examples
      appendExamples(tr, 'fail', element.key, element.fail_examples, failExInputs);

      // scores
      scoreDomElements = [];
      scoreInputs.set(element.key, scoreDomElements);
      [1, 2, 3, 4].forEach( score => {
        const td = htmlToElement('<td/>');
        tr.appendChild(td);

        const div = htmlToElement('<div class="toggle-buttons together"/>');
        td.appendChild(div);

        const label = htmlToElement(`<label class="radio _${score}"/>`);

        div.appendChild(label);

        const input = htmlToElement(`<input type="radio" class="radio _${score}" name="${element.key}_score" value="${score}" id="${element.key}_score_${score}" onChange="scoreSet('${element.key}');">`);
        label.appendChild(input);
        label.appendChild(htmlToElement(score.toString()));

        scoreDomElements.push(input);
      });
      scoreInputs.first

      // positive examples
      appendExamples(tr, 'pass', element.key, element.pass_examples, passExInputs);
	  }
    });
}

function scoreSet(feature) {
  notEnteredInputs.get(feature).value = false;
}

function computePointsPerFeature(feature){
	failExampleCount = failExInputs.get(feature).length;

	passExampleCount = passExInputs.get(feature).length;

	failExamplesSelected = 0;
	failExInputs.get(feature).forEach( domElement => {
		if (domElement.checked)
			failExamplesSelected++;
    });

	passExamplesSelected = 0;
	passExInputs.get(feature).forEach( domElement => {
		if (domElement.checked)
			passExamplesSelected++;
    });

	failRatio = failExamplesSelected / failExampleCount;

	passRatio = passExamplesSelected / passExampleCount;

	return Math.round(((passRatio - failRatio) + 1) * 1.5);
}

function examplesChange(feature) {
  computedScore = computePointsPerFeature(feature);
  scoreInputs.get(feature)[computedScore].checked = true;
  computePoints();
}

function computePoints(){
	if(task!=undefined){
		let score = 0;
		for(let feature of task.rubricSet){
			score+=computePointsPerFeature(feature)+1;
		}
		score/=task.rubricSet.length;
		let percentile = score / 4;
		let pointbox = document.getElementById("task_calc_points");
		pointbox.value=task.maxPoints * percentile;
	}
}