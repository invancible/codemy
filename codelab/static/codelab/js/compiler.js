let editor;

// Set the ace editor when the window loads
window.onload = () => {
    // initialize the ace editor
    editor = ace.edit("editor");
    // set the theme to 'dracula'
    editor.setTheme("ace/theme/dracula");
    // set the initial mode to python
    editor.session.setMode("ace/mode/python");
    // set font size to 18
    editor.setFontSize(18);
};

// Change the syntax highlighting mode based on the selected language
const changeLanguage = () => {
    // get the selected language from the dropdown menu
    const language = document.getElementById("languages").value;
    
    // set the editor mode based on the selected language
    if (language === 'c' || language === 'cpp') {
        editor.session.setMode("ace/mode/c_cpp");
    } else if (language === 'py') {
        editor.session.setMode("ace/mode/python");
    }
};

// Clear the console output
const clearConsole = () => {
    // set the content of the 'output' element to an empty string
    document.getElementById('output').innerHTML = "";
};

// The following code sends an AJAX request to the server to run the code
const runBtn = document.getElementById('run-btn');
const language = document.getElementById('languages');

runBtn.addEventListener('click', () => {
    // get the selected language from the dropdown menu
    const selectedLanguage = language.value;
    // get the code content from the editor and encode it
    const codeContent = encodeURIComponent(editor.getSession().getValue());

    // set the 'hx-vals' attribute to the selected language and code content
    runBtn.setAttribute('hx-vals', `{"language": "${selectedLanguage}", "code": "${codeContent}"}`);
});