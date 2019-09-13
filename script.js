$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "light" )) {
      $( "body" ).removeClass( "light" );
      $( ".inner-switch" ).text( "Light Mode" );
    } else {
      $( "body" ).addClass( "light" );
      $( ".inner-switch" ).text( "Dark Mode" );
    }
});

const fs = new Filer.FileSystem();
window.addEventListener('DOMContentLoaded', (event) => {

    fs.readFile('/note', 'utf8', function (err, data) {
        if (err) {
            document.querySelector("#note").innerHTML = "Welcome to my notepad! Start Typing...";
        }
        else if (data) {
            document.querySelector("#note").innerHTML = data;
        }
    });

});
var intervalID = window.setInterval(save, 20000);
function save(a) {
    fs.writeFile('/note', document.querySelector('#note').innerHTML);
    console.log(a);

}

function saveAlert(){
    save("saving...");
    alert("Saved!");
}

function download(){
    var blob = new Blob([document.querySelector('#con #note').innerHTML], {type: "text/xml;charset=utf-8"});
    saveAs(blob, "tiny.xml");
}