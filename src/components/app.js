/**
 * Created by qinai on 11/20/16.
 */
import React, {Component} from 'react';
import {StyleSheet, View, NavigatorIOS, TabBarIOS} from 'react-native';

import TaskListContainer from '../containers/TaskListContianer.js';
import TaskFormContainer from '../containers/TaskFormContainer.js';
import WeekView from './WeekView.js';
import MonthView from './MonthView.js';
import YearView from './YearView.js';
import Icon from 'react-native-vector-icons/SimpleLineIcons.js';

class TabView extends Component{
    render(){
        return (
            <View style={styleMeet.container}>
                <TaskListContainer/>
                <TaskFormContainer/>
            </View>
        );
    }
}
export default class App extends Component{
    state = {
        selectedTab: 'dayTab',
        notifCount: 0,
        presses: 0,
    };
    _renderTab = (compoParam, pageText) => {
        const props = { pageText };
        console.log('Tabbar:: compoParam is ',compoParam);
        return (
            <NavigatorIOS
                style={{flex:1}}
                initialRoute={{
                  component: TabView,
                  passProps: props,
                  title: pageText,
                  rightButtonIcon: this.state.gearIcon,
                }}>
            </NavigatorIOS>
        );
    };
    render(){
        return (
            <TabBarIOS unselectedTintColor="#666" tintColor="rgb(88,192,229)" barTintColor="#eee">
                <Icon.TabBarItemIOS
                    title="Now"
                    iconName="energy"
                    selectedIconName="energy"
                    selected={this.state.selectedTab === 'dayTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'dayTab',
                        });
                      }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                          component: TabView,
                          title: '当下',
                        }}>
                    </NavigatorIOS>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="todo"
                    iconName="compass"
                    selected={this.state.selectedTab === 'weekTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'weekTab',
                        });
                      }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                          component: WeekView,
                          title: '我要做',
                        }}>
                    </NavigatorIOS>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="收藏"
                    iconName="calendar"
                    selected={this.state.selectedTab === 'monthTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'monthTab',
                        });
                      }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                          component: MonthView,
                          title: '收藏',
                        }}>
                    </NavigatorIOS>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="我"
                    iconName="directions"
                    selected={this.state.selectedTab === 'yearTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'yearTab',
                        });
                      }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                          component: YearView,
                          title: '我',
                        }}>
                    </NavigatorIOS>
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        )
    }
}

const styleMeet = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
    container:{
        flex: 1,
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    // headerContainer:{
    //     height: 75,
    //     paddingTop: 20,
    //     backgroundColor: 'rgba(98,176,255,1)',
    // },
    bodyContainer: {
        flex:5,
        marginTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});