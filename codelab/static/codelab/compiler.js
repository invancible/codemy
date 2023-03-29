let editor;

// Set the ace editor
window.onload = function() {
    editor = ace.edit("editor")
    editor.setTheme("ace/theme/dracula")
    editor.session.setMode("ace/mode/c_cpp")
    editor.setFontSize(18)
}


// Set syntax highlighter for diff languages
function changeLanguage() {
    let language = document.getElementById("languages").value;
    
    if (language == 'c' || language == 'cpp') {
      editor.session.setMode("ace/mode/c_cpp")
    } else if (language == 'py') {
      editor.session.setMode("ace/mode/python")
    }
  }


// The following code sends an ajax request to the server
const runBtn = document.getElementById('run-btn')
const language = document.getElementById('languages')

runBtn.addEventListener('click', function() {
    const selectedLanguage = language.value
    const codeContent = encodeURIComponent(editor.getSession().getValue())

    runBtn.setAttribute('hx-vals', `{"language": "${selectedLanguage}", "code": "${codeContent}"}`)
})
//