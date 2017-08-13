import React, {Component} from 'react';

export default class Text extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fmt: props.fmt
        }
    }

    _getText(text) {
        //毫秒转化成秒
        let second = Math.ceil(((Date.now()) - text) / 1000);

        if (second > 60) {
            let min = second / 60;
            if (min > 60) {
                let hour = min / 60;
                if (hour > 24) {
                    let day = hour / 24;
                    if (day > 7) {
                        let mon = day / 30;
                        if (mon > 1) {
                            let date=  new Date(text);
                            return `
                                ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
                            `;
                        } else {
                            return '一月内';
                        }
                    } else {
                        let week = day / 7;
                        if (week <= 1) {
                            return '一周内';
                        }
                        return `${parseInt(day)}天前`;
                    }
                } else {
                    return `${parseInt(hour)}小时前`;
                }
            } else {
                return `${parseInt(min)}分钟前`;
            }
        } else {
            return `${parseInt(second)}秒前`;
        }

    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <span>{this._getText(this.state.fmt)}</span>
        );
    }
}