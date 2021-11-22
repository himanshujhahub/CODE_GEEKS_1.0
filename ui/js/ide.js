$(document).ready(function () {
			
    $('#spinwh').click(function () {
        alert('Code copied to clipboard');
    });

});

let editor;
window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/cobalt");
    editor.session.setMode("ace/mode/c_cpp");
    editor.setOptions({
        enableBasicAutocompletion : true,
        enableLiveAutocompletion:   true

    });
    
}

function changeLanguage() {

    let language = $("#languages").val();

    if(language == 'c' || language == 'cpp')editor.session.setMode("ace/mode/c_cpp");
    else if(language == 'php')editor.session.setMode("ace/mode/php");
    else if(language == 'python')editor.session.setMode("ace/mode/python");
}

function executeCode() {

    $.ajax({

        url: "/opide/app/compiler.php",

        method: "POST",

        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },

        success: function(response) {
            $(".output").text(response)
        }
    })
}


