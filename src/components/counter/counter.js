import { createStore } from 'redux'
import counterReducer from './reducer'

const store = createStore( counterReducer )


store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'INCREMENT' })

export default ( r ) => {
    document.addEventListener( "DOMContentLoaded", function ( event ) {
        init();
    });

}

let init = () => {
    document.querySelectorAll( '#increment' )[ 0 ].addEventListener( "click", function ( event ) {
        store.dispatch( { type: 'INCREMENT' })
    });
    document.querySelectorAll( '#decrement' )[ 0 ].addEventListener( "click", function ( event ) {
        store.dispatch( { type: 'DECREMENT' });
    });
}
