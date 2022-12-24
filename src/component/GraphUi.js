
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import deviceCardStyle from '../assets/styles/deviceCardStyle';
import AbsoluteDot from './AbsoluteDot';

const GraphUi = () => {
    const linedata = {
        labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00'],
        datasets: [
          {
            data: [-40 , -20, -10 , 0, 20, 40, 60],
          },
        ],
      };
      const chartConfig = {
        backgroundGradientFrom: "white",
        // backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        // backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 182, 193, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
      };
    return (
        <View style={deviceCardStyle.deviceCardContainer}>
            <Text style={deviceCardStyle.devicesText}>Pie Warmer Right</Text>
            <View>
  <LineChart
    data={linedata}
    width={Dimensions.get('window').width-79} // from react-native
    height={250}
    segments={6}
    chartConfig={chartConfig}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
    
  />
</View>
<AbsoluteDot/>
        </View>
    );
};
export default GraphUi

