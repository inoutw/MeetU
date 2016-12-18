/**
 * Created by qinai on 12/12/16.
 */

import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';

export default class ColorDot extends Component{
    static propTypes = {
        dotColor: PropTypes.string,
    }
    static get defaultProps() {
        return {
            dotColor: 'black'
        }
    }
    state = {
        borderStyle: {borderColor: '#fff'},
    }
    _onPress = () => {
        this.setState({borderStyle: {borderColor: this.props.dotColor}});
    }
    render(){
        return (
            <TouchableHighlight
                style={[colorDotStyle.dotBorder, this.state.borderStyle]}
                onPress={this._onPress} underlayColor={this.props.dotColor}>
                <View style={[colorDotStyle.colorLessDot,{backgroundColor: this.props.dotColor}]}></View>
            </TouchableHighlight>
        )
    }
}

const colorDotStyle = StyleSheet.create({
    colorLessDot: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    dotBorder: {
        width: 26,
        height: 26,
        padding: 2,
        borderWidth: 1,
        borderRadius: 15,
    }
});