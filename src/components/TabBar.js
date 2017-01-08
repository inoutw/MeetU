/**
 * Created by qinai on 12/26/16.
 */
import React, {Component} from 'react';
import {View, Text, TabBarIOS, StyleSheet, NavigatorIOS} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons.js';
import TaskListContainer from '../containers/TaskListContianer.js';
import WeekView from './WeekView.js';
import App from './app.js'

export default class TabBar extends Component{
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
                  component: TaskListContainer,
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
                    {this._renderTab('TaskListContainer', 'Day')}
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="Week"
                    iconName="compass"
                    selected={this.state.selectedTab === 'weekTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'weekTab',
                        });
                      }}>
                    {this._renderTab('WeekView', 'Week')}
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="Month"
                    iconName="calendar"
                    selected={this.state.selectedTab === 'monthTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'monthTab',
                        });
                      }}>
                    {this._renderTab('MonthView', 'Month')}
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="Year"
                    iconName="directions"
                    selected={this.state.selectedTab === 'yearTab'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'yearTab',
                        });
                      }}>
                    {this._renderTab('YearView', 'Year')}
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        )
    }
}

const tabBarStyle = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
})