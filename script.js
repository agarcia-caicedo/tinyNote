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
    var myNicEditor = new nicEditor({buttonList : 
        ['bold','italic','underline','left','center','right','justify','ol','ul',
        'fontFormat','fontFamily','forecolor','subscript','superscript','strikethrough',
        'removeformat','indent','outdent','hr']});
    myNicEditor.setPanel('myNicPanel');
    myNicEditor.addInstance('note');
});

