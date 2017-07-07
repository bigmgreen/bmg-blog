import './example.css';
import React from 'react';
import {render} from 'react-dom';
import Button from './lib/button/button';
import Input,{NumberInput} from './lib/input/input';

const App = () => {
    return (
        <ul>
            {/*  其他组件依次向下罗列   */}
            <li>
                <Button
                    type="submit"
                    onClick={()=>{alert('你点击了按钮~')}}
                    className="hello"
                    name="提交"
                />
                <p>点击事件绑定</p>
            </li>
            <li>
                <Input
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                    maxLength="5"
                />
                <p>使用maxLength属性</p>
            </li>
            <li>
                <Input
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                />
                <p>不使用pattern属性</p>
            </li>
            <li>
                <Input
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                    pattern={/^\d+$/g}
                />
                <p>使用pattern属性（只能输入数字），不进行汉字过滤</p>
            </li>
            <li>
                <Input
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                    pattern={/^\d+$/g}
                    isChineseFilter={true}
                />
                <p>使用pattern属性（只能输入数字），进行汉字过滤</p>
            </li>
            <li>
                <NumberInput
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                />
                <p>整数：只能输入多个数字，或者一个0</p>
            </li>
            <li>
                <NumberInput
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                    numberType="float"
                />
                <p>小数：可以输入小数，但没有指定小数位数decimalPlaces的值，默认为15</p>
            </li>
            <li>
                <NumberInput
                    wrapClassName="wrap"
                    inputClassName="wrap-input"
                    errorClassName="wrap-error"
                    numberType="float"
                    decimalPlaces="2"
                />
                <p>小数：可以输入小数，指定小数位数decimalPlaces的值为大于等于1</p>
            </li>
        </ul>
    )
};

((doc)=>{
    "use strict";

    let body = doc.body;
    let article = doc.createElement('article');
    article.id = 'app';
    body.insertBefore(article, body.firstChild);

})(document);

const app = document.getElementById('app');

render(<App />, app);