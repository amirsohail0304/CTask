
import React from 'react';
import { View, Text } from 'react-native';
import alarmCardStyle from '../assets/styles/alarmCardStyle';

const AlarmColumn = ({lastColumnName}) => {

    return (

    <View style={alarmCardStyle.columnMain}>
        <View style={{flexDirection:"row"}}>
            {lastColumnName ==="Temp" ?
            null:
        <View style={{width: 18}}/>
    }
       <Text style={[alarmCardStyle.columnText, alarmCardStyle.columnTextColor]}>Device Name</Text>
        </View>
       <Text style={[alarmCardStyle.columnText, alarmCardStyle.columnTextColor]}>Date</Text>
       <Text style={[alarmCardStyle.columnText, alarmCardStyle.columnTextColor]}>{lastColumnName}</Text>
    </View>
    );
};
export default AlarmColumn

