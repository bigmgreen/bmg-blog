import React from 'react';
import {render} from 'react-dom';
import Button from './lib/button/button';
import Input from './lib/input/input';

const App = () => {
    return (
        <div>
            {/*  其他组件依次向下罗列   */}
            <Button
                type="submit"
                onClick={()=>{alert('你点击了按钮~')}}
                className="hello"
                name="提交"
            />
            <Input
                wrapClassName="wrap"
                inputClassName="wrap-input"
                errorClassName="wrap-error"
                pattern="^\d+\.?(\d{1,2})?$"
            />
        </div>
    )
};

((doc)=>{
    "use strict";

    let body = doc.body;
    let div = doc.createElement('div');
    div.id = 'app';
    body.insertBefore(div, body.firstChild);

})(document);

const app = document.getElementById('app');

render(<App />, app);