import { StyleSheet } from 'react-native';

const styles=StyleSheet.create({
  container:{

flex:1 ,
  },
  subtitle:{
    color:'#000',
    fontSize:20,
    marginVertical:18
  },

  row:{
    flexDirection:'row' ,
    flexWrap:'wrap'
  },
  noItem:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
    textAlign:"center",
    padding:3 ,
    borderRadius:20,
    backgroundColor:'#f1f1f1'
  }
})

export default styles;