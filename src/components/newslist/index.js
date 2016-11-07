import config from './config.json'
import {drawTemplate} from './newslist'
import axios from 'axios'


let apiUrl = config.apiurl;

let loadNewsList = () => {
    return axios.get( apiUrl ).then( function ( response ) {
           return response.data;
        })
}


let loadNewsItem = () => {

}
let init = () => {
    document.querySelectorAll( '#loadlist' )[ 0 ].addEventListener( "click", function ( event ) {
        drawTemplate(loadNewsList());
    });
}
let uiBindings = () => {
    document.addEventListener( "DOMContentLoaded", function ( event ) {
        init();
    });
}
export default () => {
    uiBindings();
}