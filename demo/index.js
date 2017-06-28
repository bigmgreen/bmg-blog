import _ from 'lodash';
import './style.css';
import meImg from './user.jpg';

function component () {
    var el =  document.createElement('div');

    el.innerHTML = _.join(['hello', 'webpack'], ' ');
    el.classList.add('hello');

    var img = new Image();
    img.src = meImg;
    el.appendChild(img);

    return el;
}

document.body.appendChild(component());
