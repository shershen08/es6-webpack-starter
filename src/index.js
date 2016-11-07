import func from './events'
import menu from './menu'
import page from 'page';
import config from './app-config.json'
import counter from  './components/counter/counter'


let appPage = page;

let configStates = () => {
    appPage('/', indexController)
    appPage('/user', userController)
    appPage('/news', newsController)
    appPage('*', notfoundController)
    appPage()
}

let indexController = () => {
    console.log('indexController');
}
let userController = () => {
    
}
let newsController = () => {
    
}
let notfoundController = () => {
    
}

let init = () => {

    func();

    console.log(config);
    menu(appPage);

    counter();
}

init();
