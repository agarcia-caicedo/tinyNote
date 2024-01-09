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
            console.log(err);
            //quill.setText('Welcome to my note! Start typing...');
        }
        if (data) {
            quill.setContents(JSON.parse(data));
        }
    });

    
});

function saveFile() {
    fs.writeFile('/note', JSON.stringify(quill.getContents()), function(err) {
        if(err) {
            console.error('Error saving', err);
            return alert('Unable to Save!');
        }
        return alert('Saved!');
    });
}

function download(){
    var blob = new Blob([document.querySelector('#con #note').innerHTML], {type: "text/xml;charset=utf-8"});
    saveAs(blob, "tiny.xml");
}

function downloadPDF(){
    var doc = new jsPDF();
    var note = `
                ${document.querySelector('#con #note').innerText} \n
              ~
              `;
    doc.text(note, 10, 10);
    doc.save('tinyNote.pdf')
}
