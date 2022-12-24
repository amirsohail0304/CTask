
import React from 'react';
import { View, Text } from 'react-native';
import alarmCardStyle from '../assets/styles/alarmCardStyle';

const AlarmRow = ({item, index}) => {
    return (
        <View style={[alarmCardStyle.alarmRowMain,{backgroundColor : index%2 !==0 ? "#f0f8ff":"white"}]}>
        <View style={{flexDirection:"row"}}>
            {item.status ? 
            <View style={[alarmCardStyle.alarmStatus,{backgroundColor:item.status}]}></View>: null
        }
            <Text style={[alarmCardStyle.columnText, alarmCardStyle.rowTextColor,{marginLeft: item.status ? 12 : null,}]}>{item.deviceName}</Text>
            </View>
            <Text style={[alarmCardStyle.columnText, alarmCardStyle.rowTextColor]}>{item.date}</Text>
            <Text style={[alarmCardStyle.columnText, alarmCardStyle.rowTextColor]}>{item.time}</Text>
        </View>
    );
};
export default AlarmRow

