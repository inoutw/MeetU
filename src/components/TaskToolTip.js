/**
 * Created by qinai on 12/8/16.
 */
import React, {PropTypes} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import ToolTip from 'react-native-tooltip';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

/* v0: image to show the priority
var priorIconMap = {
    1: require('../static/images/paperclip1.png'),
    2: require('../static/images/paperclip2.png'),
    3: require('../static/images/paperclip3.png'),
    4: require('../static/images/paperclip4.png'),
    5: require('../static/images/paperclip5.png'),
}*/
var iconColorMap = {
    1: '#f00',
    2: 'orange',
    3: '#00f',
    4: 'green',
    5: 'purple',
}
const TaskToolTip = ({taskAction, priorityNum, taskId}) => {
    /* v0: image to show the priority
    var imageSrc = priorIconMap[priorityNum];
     <Image source = {imageSrc} style = {tooltipStyle.editIcon}/>
    */

    if(priorityNum>0){
        return (<ToolTip
            actions={[
              {text: '删除', onPress: ()=>{console.log("TaskToolTip:: taskId is ", taskId);taskAction(taskId)}},
            ]}
            underlayColor='transparent'
            arrowDirection='right'
        >
            <Icon name="paper-clip" style = {tooltipStyle.editIcon} color={iconColorMap[priorityNum]}/>

        </ToolTip>);
    }else{
        return (<Text style = {tooltipStyle.editIcon}></Text>);
    }


}
export default TaskToolTip;

const tooltipStyle = StyleSheet.create({
    editIcon:{
        width: 24,
        height: 22,
        marginTop: 3,
        fontSize: 20,
        marginLeft: 3,
    },
})