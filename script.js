$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "light" )) {
      $( "body" ).removeClass( "light" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "light" );
      $( ".inner-switch" ).text( "ON" );
    }
});

bkLib.onDomLoaded(function() {
    var myNicEditor = new nicEditor();
    myNicEditor.setPanel('myNicPanel');
    myNicEditor.addInstance('note');
});