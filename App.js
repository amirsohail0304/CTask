
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text

} from 'react-native';
import mainPageStyle from './src/assets/styles/mainPageStyle';
import AlarmLogsUi from './src/component/AlarmLogsUi';
import DevicesCardUi from './src/component/DevicesCardUi';
import GraphUi from './src/component/GraphUi';
import HeaderUi from './src/component/HeaderUi';
import ProbeCardUi from './src/component/ProbeCardUi';


const App = () => {
  return (
    <View style={mainPageStyle.mainContainer}>
      <HeaderUi />
      <View style={mainPageStyle.textContainer}>
        <Text style={mainPageStyle.titleText}>Welcome, MetFord</Text>
        <Text style={mainPageStyle.descrpText}>hear's what's happening in your cake accout</Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 12}}
        >
        <DevicesCardUi />
        <GraphUi/>
        <AlarmLogsUi/>
        <ProbeCardUi/>
      </ScrollView>
    </View>
  );
};
export default App

