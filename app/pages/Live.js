/**
 * Created by ljunb on 16/5/16.
 * 互动页
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Header from '../components/common/Header';

export default class News extends Component {

    render() {
        return (
            <Header title="互动" leftIcon="ios-qr-scanner" leftTouchAction={this._scannerAction}/>
        )
    }

    _scannerAction() {
        alert('scanner')
    }
}