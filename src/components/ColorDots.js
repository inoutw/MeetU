/**
 * Created by qinai on 12/12/16.
 */
import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';

var colorArr= ['#f00', 'orange', '#00f', 'green', 'purple'];

export default class ColorDots extends Component {
    state = {
        selectedIndex: null,
        selectedOption: null,
        borderStyle: {borderColor: '#fff'},
    }
    static propTypes = {
        options: PropTypes.array,
        onSelect: PropTypes.func,
        alignStyle: PropTypes.object,

    }
    static get defaultProps(){
        return {
            options: colorArr,
            onSelect: this._onSelect,
            alignStyle: {flexDirection: 'row',justifyContent: 'space-around',}
        }
    }
    _onSelect(selectedIndex, selectedOption){
        //console.log("ColorDots:: selectedIndex is ", selectedIndex);
        this.setState({
            selectedIndex,
            selectedOption,
        });
        //why do this? Pass selected element to where it used.
        //console.log("ColorDots:: this.props is ", this.props);
        this.props.onSelect(selectedIndex, selectedOption);
    }
    render(){
        const {selectedIndex, borderStyle} = this.state;

        const dotsDom = this.props.options.map(function(option, index){
            const isSelected = this.state.selectedIndex == index;
            const style = isSelected? {borderColor: option}: borderStyle;
            const _onSelectDot = this._onSelect.bind(this, index, option);
            return (
                <TouchableHighlight
                    style={[dotsStyle.dotBorder, style]}
                    onPress={_onSelectDot} key={index}>
                    <View style={[dotsStyle.colorLessDot,{backgroundColor: option}]}></View>
                </TouchableHighlight>
            );
        }.bind(this));
        return (
            <View style={this.props.alignStyle}>
                {dotsDom}
            </View>
        )
    }
}

const dotsStyle = StyleSheet.create({
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