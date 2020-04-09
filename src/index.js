import router from './routes';

window.addEventListener('load', router);
// changed in hash
window.addEventListener('hashchange', router);