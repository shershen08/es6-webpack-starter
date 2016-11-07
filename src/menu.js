

export default (r) => {
    document.addEventListener( "DOMContentLoaded", function ( event ) {
        domInit(r);
    });
  
}

let domInit = (router) => {
    document.querySelectorAll( '#userlink' )[ 0 ].addEventListener( "click", function ( event ) {
        router( '/user' );
    });
}
