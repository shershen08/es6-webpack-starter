import Rx from 'rxjs/Rx';

var Observable = require('rxjs/Observable').Observable;
var map = require('rxjs/operator/map').map;

export default () => {

    //1
    Rx.Observable.of( 'hello world' )
        .subscribe( function ( x ) { console.log( x ); });

    //2
    map.call(Observable.of(1,2,3), function (x) { return x + '!!!'; });
}