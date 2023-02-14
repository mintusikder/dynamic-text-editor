const editor = document.getElementById('editor');
const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const undoButton = document.getElementById('undo');
const redoButton = document.getElementById('redo');
const saveButton = document.getElementById('save');
const loadButton = document.getElementById('load');
const lineNumbers = document.getElementById('line-numbers');

let savedText = '';

function updateLineNumbers() {
	const text = editor.value;
	const lines = text.split('\n');
	let lineNumbersHTML = '';
	for (let i = 1; i <= lines.length; i++) {
		lineNumbersHTML += `${i}\n`;
	}
	lineNumbers.innerHTML = lineNumbersHTML;
}

function saveText() {
	savedText = editor.value;
}

function loadText() {
	editor.value = savedText;
	updateLineNumbers();
}

boldButton.addEventListener('click', () => {
	document.execCommand('bold', false, null);
});

italicButton.addEventListener('click', () => {
	document.execCommand('italic', false, null);
});

underlineButton.addEventListener('click', () => {
	document.execCommand('underline', false, null);
});

undoButton.addEventListener('click', () => {
	document.execCommand('undo', false, null);
});

redoButton.addEventListener('click', () => {
	document.execCommand('redo', false, null);
});

saveButton.addEventListener('click', () => {
	saveText();
});

loadButton.addEventListener('click', () => {
	loadText();
});

editor.addEventListener('input', () => {
	updateLineNumbers();
});
