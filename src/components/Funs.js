/**
 * Created by qinai on 12/25/16.
 */
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                <Text style={funStyle.textWrap}><Ionicons name="ios-musical-notes" size={20}/> {this.props.whatFun}</Text>
            </View>
        );
    }
}

const funStyle = StyleSheet.create({
    funContainer: {
        marginBottom: 20,
        backgroundColor: 'rgba(224,240,255,1)',
        height: 30,
    },
    textWrap: {
        color: '#3b7ed5',
        fontWeight: 'bold',
        lineHeight: 24,
        paddingLeft: 6,
    }
});