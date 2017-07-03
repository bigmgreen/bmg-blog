import {render} from 'react-dom';
import Button from './lib/button/button';

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
        </div>
    )
};

const app = document.getElementById('app');

render(<App />, app);