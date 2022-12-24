import { StyleSheet } from "react-native";

const headerStyle = StyleSheet.create({
    headerMainContainer: {
      marginTop: '5%',
      flexDirection:"row",
      justifyContent:"space-between"

    },
    headerRightContainer: {
        flexDirection: "row",
    },
    headerImage:{
     width: 20,
     height:20,
     borderRadius: 10,
     backgroundColor: "red"
    },
    headerBellIcon:{
        paddingHorizontal: 10
    },
    belIconBadge:{
        position:'absolute',
        height:5,
        width: 5,
        borderRadius: 2.5,
        backgroundColor:"red",
        right:12
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
  export default headerStyle;
  