/**
 * @file newsRedux组件
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';

export default class newsRedux extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            alt: '小金星国际教育集团'
        }
    }

    handleClick (e) {
        e.preventDefault();
    }

    render() {
        console.log(this.props.location);
        const linkData = this.props.location;
        return (
            <div className = "goldStar-component-newsRedux">
                <div>
                    <h1>Link Data</h1>
                    <h3>title-{linkData.mainDetailObj.title}</h3>
                    <p>desc-{linkData.mainDetailObj.desc}</p>
                    <p>form-{linkData.pagename}</p>     
                </div>
                <br/>
                <div>
                    <h1>redux Data</h1>
                    <h3>title-redux Data</h3>
                    <p>desc-redux Dataredux Dataredux Data</p>
                    <p>form-redux form</p>     
                </div>
            </div>
        )
    }
}