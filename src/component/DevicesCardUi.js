
import React from 'react';
import { View, Text } from 'react-native';
import deviceCardStyle from '../assets/styles/deviceCardStyle';
import AbsoluteDot from './AbsoluteDot';

const DevicesCardUi = () => {
    let data = [
        { id: 1, temperatur: "2.5 C", title: "Pie Fridge", descrption: "Amit minim mollit deserunt ullamco est sit amet", time: '1 min ago', percent: "56%" },
        { id: 2, temperatur: "1 C", title: "Pie Warmer Right", descrption: "Amit minim mollit deserunt ullamco est sit amet", time: '2 min ago', percent: "56%" }
    ]
    return (
        <View style={deviceCardStyle.deviceCardContainer}>
            <Text style={deviceCardStyle.devicesText}>Devices</Text>
            {data.map((item, index) => (
                <View style={deviceCardStyle.tempMainCard}
                    key={index}
                >
                    <Text style={deviceCardStyle.countText}>{item.percent}</Text>
                    <View style={deviceCardStyle.tempDetailMain}>
                        <View style={deviceCardStyle.tempDetailLeft}>
                            <Text style={deviceCardStyle.tempText}>{item.temperatur}</Text>
                        </View>
                        <View style={deviceCardStyle.tempDetailRight}>
                            <Text style={deviceCardStyle.PieText}>{item.title}</Text>
                            <Text style={deviceCardStyle.pieDescpText}>{item.descrption}</Text>
                            <Text style={deviceCardStyle.timeText}>{item.time}</Text>
                        </View>
                    </View>
                </View>

            ))}

            <AbsoluteDot />
        </View>
    );
};
export default DevicesCardUi

