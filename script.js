var quill = new Quill('#note', {
    modules: {
        toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
        ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'  // or 'bubble'
});

const fs = new Filer.FileSystem();
window.addEventListener('DOMContentLoaded', (event) => {

    $( ".inner-switch" ).on("click", function() {
        if( $( "body" ).hasClass( "light" )) {
          $( "body" ).removeClass( "light" );
          $( ".inner-switch" ).text( "Light Mode" );
        } else {
          $( "body" ).addClass( "light" );
          $( ".inner-switch" ).text( "Dark Mode" );
        }
    });

    fs.readFile('/note', 'utf8', function (err, data) {
        if (err) {
            quill.setText('Welcome to my note! Start typing...');
        }
        else if (data) {
            quill.setContents(JSON.parse(data));
        }
    });

    var intervalID = window.setInterval(save, 20000);

});

function save() {
    fs.writeFile('/note', document.querySelector('#note').innerHTML);
}

function saveAlert(){
    save("saving...");
    alert("Saved!");
}

function download(){
    var blob = new Blob([document.querySelector('#con #note').innerHTML], {type: "text/xml;charset=utf-8"});
    saveAs(blob, "tiny.xml");
}