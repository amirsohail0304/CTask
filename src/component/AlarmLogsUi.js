
import React from 'react';
import { View, Text } from 'react-native';
import alarmCardStyle from '../assets/styles/alarmCardStyle';
import deviceCardStyle from '../assets/styles/deviceCardStyle';
import AbsoluteDot from './AbsoluteDot';
import AlarmColumn from './AlarmColumn';
import AlarmRow from './AlarmRow';

const DevicesCardUi = () => {
    let data = [
        { id: 1,  deviceName: "Ben & jerrys", date: "01/28/28",  time: '7:30 am', status:'green' },
        { id: 1,  deviceName: "Ben & jerrys", date: "01/28/28",  time: '7:30 am', status:'yellow' },
        { id: 1,  deviceName: "Ben & jerrys", date: "01/28/28",  time: '7:30 am', status:'red' },
    ]
    return (
        <View style={deviceCardStyle.deviceCardContainer}>
            <Text style={deviceCardStyle.devicesText}>Alarm Logs</Text>
            <View style={alarmCardStyle.alarmRowColumn}>
                <AlarmColumn
                    lastColumnName='Time'
                />
                {data.map((item, index)=>(
                    <AlarmRow 
                    key={index}
                    item={item}
                    index={index}
                    />

                ))}
            </View>
            <Text style={deviceCardStyle.viewAllText}>View all</Text>
            <AbsoluteDot/>
        </View>
    );
};
export default DevicesCardUi

