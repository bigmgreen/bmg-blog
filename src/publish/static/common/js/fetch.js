import Promise from 'promise-polyfill';
import 'whatwg-fetch';


/*   兼容性处理  start */
if (!window.Promise) {
    window.Promise = Promise;
}
/*   兼容性处理  end   */

/**
 * TODO 请求动画未加~
 */
const _fetch =(url, data, target, option) =>{
    return fetch(url, option).then(res=> {
        return res.json();
    }).then(data=> {
        const {code, msg} = data;
        const IS_LOGOUT = -1;
        if (IS_LOGOUT === code) {
            target.$router.push('/login');
            log(msg);
        }
        return data;
    });
};

/*   请求方法封装  start  */
window.$ = {

    /**
     * fetch函数封装
     * @param url 请求路径
     * @param data 请求数据
     * @param target 发出请求的实例
     * @param config 额外配置项
     */
    post (url, data, target, config) {

        let option = Object.assign({
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
        }, config);

        if (config === false) {
            delete option.headers;
        }

        if (typeof data === 'object') {

            if (data instanceof FormData) {
                option = Object.assign(option, {
                    body: data
                });
            } else {
                option = Object.assign(option, {
                    body: JSON.stringify(data)
                });
            }

        }

        return _fetch(url, data, target, option);
    },

    /**
     * fetch函数封装
     * @param url 请求路径
     * @param data 请求数据
     * @param target 发出请求的实例
     * @param config 额外配置项
     */
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