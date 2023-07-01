import React from "react"
import { Text ,FlatList} from "react-native"
import styles from "./style";


const Categories=({categories,selectedCategory})=>{

  return (
    <FlatList horizontal data={categories} renderItem={({item})=>(

      <Text style={[styles.item,selectedCategory === item ? styles.selectedCategory : {}]}>{item}</Text>
      
  )}/>
  )

}

export default React.memo(Categories);