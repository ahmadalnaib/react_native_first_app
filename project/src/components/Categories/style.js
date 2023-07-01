const { StyleSheet } = require("react-native");

const styles=StyleSheet.create({
  item:{
   color: 'rgba(0,0,0,0.5)',
   marginRight:17,
   fontSize:12,
   paddingVertical:16

  },
  selectedCategory:{
    textDecorationLine:'underline',
    color:'red' ,
    fontWeight:'bold'
  }
})


export default styles;