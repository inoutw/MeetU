/**
 * Created by qinai on 12/27/16.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

export default class WeekView extends Component{
    render(){
        return (
            <Image source={require('../static/images/note_back_tiny.png')} style={weekStyle.backgroundImage}>
                <View style={weekStyle.weekContainer}>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle} />
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle} />
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle} />
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle} />
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>
                    <View style={weekStyle.textWrap}>
                        <TextInput style={weekStyle.inputStyle}/>
                    </View>

                </View>
            </Image>
        )
    }
}
const weekStyle = StyleSheet.create({
    weekContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    textWrap:{
        borderBottomWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'solid',
        backgroundColor: 'rgba(0,0,0,0)',
        width: 330,
        height: 28,
    },
    inputStyle:{
        height: 28,
        flex: 1,
        fontSize: 13,
        marginRight: 3,
    }

})