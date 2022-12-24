
import React from 'react';
import { View, Text } from 'react-native';
import deviceCardStyle from '../assets/styles/deviceCardStyle';

const AbsoluteDot = () => {
    let data =[
        {id: 1, temperatur: "2.5 C", title: "Pie Fridge", descrption: "Amit minim mollit deserunt ullamco est sit amet", time: '1 min ago', percent: "56%" },
        {id: 2, temperatur: "1 C", title: "Pie Warmer Right", descrption: "Amit minim mollit deserunt ullamco est sit amet", time: '2 min ago', percent: "56%" }
    ]
    return (
        <>
        <View style={[deviceCardStyle.dotViewPosition,deviceCardStyle.dotViewTop]}
        ></View>
        <View
            style={[deviceCardStyle.dotViewPosition,deviceCardStyle.dotViewBottom]}
            ></View>
            <View
            style={[deviceCardStyle.dotViewPosition,deviceCardStyle.dotViewRight]}
            ></View>
            <View
            style={[deviceCardStyle.dotViewPosition,deviceCardStyle.dotViewLeft]}
            ></View>
            </>
            );
};
export default AbsoluteDot

