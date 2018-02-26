/**
 * @file 官网关于我们
 * @author gaona
 */
import React from 'react';
import {
    Link
} from 'react-router-dom';
import Header from '../../components/layout/header.jsx';
import Banner from '../../components/layout/banner.jsx';
import Footer from '../../components/layout/footer.jsx';
import Join from '../components/join.jsx';
import ContactUs from '../components/contactUs.jsx';

export default class AboutIndex extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name: 'zhangsan'
        }
    }

    handleClick(e) {
        e.preventDefault(e);
    }


    render() {
        return (
            <div className = "goldStar-about">
                <Header />
                <Banner />
                <Join />
                <ContactUs />
                <Footer />
            </div>
        )
    }
}