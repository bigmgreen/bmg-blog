import  './footer.css';
import  React, {Component} from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className={this.props.anchorClassName}>
                <p>&copy; {this.props.desc}</p>
            </footer>
        );
    }

}