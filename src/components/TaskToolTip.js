/**
 * Created by qinai on 12/8/16.
 */
import React, {PropTypes} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import ToolTip from 'react-native-tooltip';


var priorIconMap = {
    1: require('../static/images/paperclip1.png'),
    2: require('../static/images/paperclip2.png'),
    3: require('../static/images/paperclip3.png'),
    4: require('../static/images/paperclip4.png'),
    5: require('../static/images/paperclip5.png'),

}
const TaskToolTip = ({taskAction, priorityNum, taskId}) => {
    var imageSrc = priorIconMap[priorityNum];

    if(priorityNum>0){
        return (<ToolTip
            actions={[
              {text: '删除', onPress: ()=>{console.log("TaskToolTip:: taskId is ", taskId);taskAction(taskId)}},
            ]}
            underlayColor='transparent'
            arrowDirection='right'
        >
            <Image source = {imageSrc} style = {tooltipStyle.editIcon}/>
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
    },
})