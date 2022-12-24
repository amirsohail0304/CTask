
import React from 'react';
import { View, Text } from 'react-native';
import alarmCardStyle from '../assets/styles/alarmCardStyle';
import deviceCardStyle from '../assets/styles/deviceCardStyle';
import AbsoluteDot from './AbsoluteDot';
import AlarmColumn from './AlarmColumn';
import AlarmRow from './AlarmRow';

const ProbeCardUi = () => {
    let data = [
        { id: 1,  deviceName: "Pie Fridge", date: "01/28/28",  time: '2.5 C', status:null },
        { id: 1,  deviceName: "Pie Fridge", date: "01/28/28",  time: '2.5 C', status:null },
        { id: 1,  deviceName: "Pie Fridge", date: "01/28/28",  time: '2.5 C', status:null },
    ]
    return (
        <View style={deviceCardStyle.deviceCardContainer}>
            <Text style={deviceCardStyle.devicesText}>Probe</Text>
            <View style={alarmCardStyle.alarmRowColumn}>
                <AlarmColumn
                    lastColumnName='Temp'
                />
                {data.map((item, index)=>(
                    <AlarmRow
                    key={index}
                    item={item}
                    index={index}
                    />

                ))}
            </View>
            <AbsoluteDot/>
        </View>
    );
};
export default ProbeCardUi

