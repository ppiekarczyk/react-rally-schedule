'use strict';

var React = require('react-native');

var Main = require('./app/components/Main');
var Schedule = require('./app/components/Schedule');

var DAY_1 = require('./app/stores/day1');
var DAY_2 = require('./app/stores/day2');

var {
  AppRegistry,
  TabBarIOS,
} = React;

var ReactRally = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'day1'
    }
  },

  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  },

  render: function() {
    return (
      <TabBarIOS
        barTintColor="#323232"
        tintColor="#377C9B">
        <TabBarIOS.Item
          title="Day 1"
          icon={ require('image!tea38') }
          onPress={ () => this.changeTab('day1') }
          selected={ this.state.selectedTab === 'day1' }>
          <Main data={DAY_1} day="1" />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Day 2"
          icon={ require('image!fruit162') }
          onPress={ () => this.changeTab('day2') }
          selected={ this.state.selectedTab === 'day2' }>
          <Main data={DAY_2} day="2" />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('ReactRally', () => ReactRally);
