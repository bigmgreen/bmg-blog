import './spinner.css';

const doc = document;
function isExit() {
    return doc.querySelector('#spinner');
}

export default class Spinner {

    static show() {
        if (isExit()) {
            doc.querySelector('#spinner').style.display = 'block';
        } else {
            let _div = doc.createElement('div');
            _div.id = 'spinner';
            _div.className = 'spinner';
            doc.body.appendChild(_div);
            _div = null;
        }
    }

    static hide() {

        if (isExit()) {
            setTimeout(()=> {
                doc.querySelector('#spinner').style.display = 'none';
            }, 500);
        }
    }
}