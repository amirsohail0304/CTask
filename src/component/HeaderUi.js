import React from 'react';
import {Text,View,} from 'react-native';
import headerStyle from '../assets/styles/headerStyle';
import MenuIcon from 'react-native-vector-icons/MaterialIcons';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import BellIcon from 'react-native-vector-icons/FontAwesome';


const HeaderUi = () => {

  return (
   <View style={headerStyle.headerMainContainer}>
    <MenuIcon  name='menu' size={26} color="black"/>
    <View style={headerStyle.headerRightContainer}>
    <SearchIcon name='search' size={18} color="gray"/>
    <View style={headerStyle.headerBellIcon}>
    <BellIcon  name='bell' size={18} color="gray"/>
    <View style={headerStyle.belIconBadge}>

    </View>
    </View>
    <View style={headerStyle.headerImage}>

    </View>
    </View>
   </View>
  );
};



export default HeaderUi;
