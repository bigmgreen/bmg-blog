import Promise from 'promise-polyfill';
import 'whatwg-fetch';


/*   兼容性处理  start */
if (!window.Promise) {
    window.Promise = Promise;
}
/*   兼容性处理  end   */

const _fetch =(url, data, target, option) =>{
    return fetch(url, option).then(res=> {
        return res.json();
    }).then(data=> {
        const {code, msg} = data;
        const IS_LOGOUT = -1;
        if (IS_LOGOUT === code) {
            target.$router.push('/login');
            log(msg);
            return null;
        }
        return data;
    });
};

/*   请求方法封装  start  */
window.$ = {

    post (url, data, target, config) {

        let option = Object.assign({
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
        }, config, {
            body: JSON.stringify(data)
        });

        return _fetch(url, data, target, option);
    },

    get (url, data, target, config) {
        let option = Object.assign({
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
        }, config);

        url += '?';
        if (typeof data === 'object') {
            for (let key of Object.keys(data)) {
                url += `${key}=${data[key]}&`
            }
        }

        url += Date.now();

        return _fetch(url, data, target, option);
    }
};
/*   请求方法封装  end  */