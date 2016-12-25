/**
 * Created by qinai on 12/25/16.
 */
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Funs extends Component{
    static propTypes = {
        whatFun: PropTypes.string,
    }
    static get defaultProps(){
        return {
            whatFun: "KTV with Kekeluo!"
        }
    }
    render(){
        return (
            <View style={funStyle.funContainer}>
                <Text style={funStyle.textWrap}>Have fun: {this.props.whatFun}</Text>
            </View>
        );
    }
}

const funStyle = StyleSheet.create({
    funContainer: {
        marginBottom: 20,
        backgroundColor: 'pink',
        height: 30,
    },
    textWrap: {
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 24,
        paddingLeft: 6,
    }
});