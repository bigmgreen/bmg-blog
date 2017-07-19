import React, {Component} from 'react';
import Input from '../input/input';

export default class VerifyCode extends Component {
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);

        this.state = {
            src: props.src
        }
    }

    _onClick(e) {
        this.setState({
            src: this._getNewSrc(this.state.src)
        });
        e.preventDefault();
        e.stopPropagation();
    }

    _getNewSrc(src) {
        return src.split('?')[0] + '?' + (+new Date);
    }

    render() {
        const code = this.props;
        return (
            <div className={code.wrapImgClassName}>
                <Input {...this.props}/>
                <img
                    className={code.imgClassName}
                    src={this._getNewSrc(this.state.src)}
                    alt={code.alt}
                    onClick={e=>this._onClick(e)}
                />
            </div>
        );
    }
}