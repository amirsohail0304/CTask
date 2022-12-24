import { StyleSheet } from "react-native";

const deviceCardStyle = StyleSheet.create({
  deviceCardContainer: {
    backgroundColor: "#e6e6fa",
    marginHorizontal: 10,
    marginTop: '8%',
    borderRadius: 4,
    padding: 15,
    borderWidth: 4,
    borderColor: "gray",
  },
  // `#dc143c`
  devicesText: {
    color: "black",
    fontSize: 16,
    fontWeight: '500',
    opacity: 0.7,
    marginTop: 5,
  },

  tempMainCard: {
    marginTop: 13,
    padding: 8,
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 4,
    width: "100%"
  },
  countText: {
    textAlign: "right",
    color: "blue",
    fontSize: 12,
    fontWeight: '400',
    opacity: 0.9,
  },
  tempDetailMain: {
    flexDirection: "row",
  },
  tempDetailLeft: {
    height: 80,
    width: 80,
    backgroundColor: `#ffc0cb`,
    borderRadius: 4,
    justifyContent: "center"
  },
  tempDetailRight: {
    marginLeft: 10
  },
  tempText: {
    textAlign: "center",
    color: "#b22222",
    fontSize: 18,
    fontWeight: '700',
    opacity: 0.9,
  },
  PieText: {
    color: "black",
    fontSize: 16,
    fontWeight: '600',
    opacity: 0.7,
  },
  pieDescpText: {
    color: "black",
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.5,
    width: "65%"
  },
  timeText: {
    color: "black",
    fontSize: 14,
    fontWeight: '600',
    opacity: 0.5,
    marginTop: 7
  },
  viewAllText: {
    color: "blue",
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.5,
    marginTop: 8,
    textAlign: "center"
  },
  dotViewPosition:{
    position:"absolute", 
    width:10, 
    height:10,
     borderRadius: 5, 
     backgroundColor:"gray"
  },
  dotViewTop:{
    alignSelf:"center",
     top: -7, 
  },
  dotViewBottom:{
     bottom: -7,
     alignSelf:"center",
  },
  dotViewLeft:{
    left: -7,
    top:"50%"
  },
  dotViewRight:{
     right: -7,
     top:"50%"
  }
});

export default deviceCardStyle;
