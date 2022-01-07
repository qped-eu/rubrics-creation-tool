window.addEventListener('load', (event) => {
    load();
});


function Task(name, maxPoints, course, week, differentiation, deliverables, rubricSet, additionalComments){

	this.name = name;
	this.maxPoints = maxPoints;
	this.course = course;
    this.week = week;
    this.differentiation = differentiation;
    this.deliverables = deliverables;
	this.rubricSet = rubricSet;
	this.additionalComments = additionalComments;
	this.feedbackSet=[];
}

function Deliverable(name,selected){
    this.name = name;
    this.selected = selected;
}

function EnabledFeature(name, weight){
    this.name = name;
    this.weight = weight;
}

/* HTML to Element(s) copied from
 * https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
 */
/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

/**
 * @param {String} HTML representing any number of sibling elements
 * @return {NodeList} 
 */
function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function makeToast(displayText) {
  // Get the snackbar DIV
  var snackbar = document.getElementById("snackbar");
  snackbar.innerHTML = displayText;

  // Add the "show" class to DIV
  snackbar.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
} 