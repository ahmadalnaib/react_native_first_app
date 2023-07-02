import React from "react"
import { Text ,FlatList, View, TouchableOpacity} from "react-native"
import styles from "./style";


const Categories=({categories,selectedCategory,onCategoryPress})=>{

  return (
    <FlatList style={{marginRight:-32}} showsHorizontalScrollIndicator={false} horizontal data={categories} renderItem={({item})=>(

      <TouchableOpacity onPress={ ()=> onCategoryPress(item)}>
        <Text style={[styles.item,selectedCategory === item ? styles.selectedCategory : {}]}>{item}</Text>
      </TouchableOpacity>
      
  )}/>
  )

}

export default React.memo(Categories);