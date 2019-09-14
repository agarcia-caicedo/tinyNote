var toolbarOptions = [

    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
      
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

var quill = new Quill('#note', {
    modules: {
        toolbar: toolbarOptions
      },
    placeholder: 'Start typing...',
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
        if (data) {
            quill.setContents(JSON.parse(data));
        }
    });

    
});

function save() {
    fs.writeFile('/note', JSON.stringify(quill.getContents()));
}

function saveAlert(){
    save();
    alert("Saved!");
}

function download(){
    var blob = new Blob([document.querySelector('#con #note').innerHTML], {type: "text/xml;charset=utf-8"});
    saveAs(blob, "tiny.xml");
}