import { StyleSheet, Dimensions } from "react-native";
const window=Dimensions.get('window')
const width= window.width;

const styles=StyleSheet.create({
  card:{
padding:4 ,
borderWidth:1,
borderColor:'#e2e2e2',
borderRadius:15,
marginBottom:12

  },
  image:{
    width:(width - 96)  / 2,
    height:120 ,
    borderRadius:15,
  },
  title:{
    fontSize:12,
    fontWeight:'500',
    marginTop:12,
    marginLeft:6,
    color:'rgba(0,0,0,0.5)',

  },
  subtitle:{
    fontSize:10,
    fontWeight:'300',

  },
      icon:{
    width: 10,
    height:10,
    marginRight:6
      },
  row:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:12,
    marginLeft:2,
    marginBottom:12
  }

})

export default styles;