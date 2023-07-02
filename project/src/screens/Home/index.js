import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttractionCard";
import jsonData from '../../data/data.json'
import categories from "../../data/categories.json";

const ALL='All';

const Home =() =>{
  const [selectedCategory,setSelectedCategory]=useState(ALL);
  const [data,setData]=useState([]);

  useEffect(()=>{
setData(jsonData);
  },[])

  useEffect(()=>{
if(selectedCategory === ALL){
  setData(jsonData)
}else{
  const filterdData=jsonData?.filter(item=>item?.categories?.includes(selectedCategory))
  setData(filterdData)
}
      },[selectedCategory])
  return (
<SafeAreaView style={styles.container}>
<FlatList data={data}
 numColumns={2} style={{flexGrow:1,margin:32 ,}} 
 ListEmptyComponent={(<Text style={styles.noItem}>No items found!</Text>)}
  ListHeaderComponent={( <>
  <Title text="Where do" 
  style={{fontWeight:'normal'}}/>
 <Title text="you want to go"/>
 <Title text="Explore Attractions"
  style={styles.subtitle}/>
 <Categories 
 selectedCategory={selectedCategory}
  onCategoryPress={setSelectedCategory} 
  categories={[ALL,...categories]}/>
  </>)} 
  keyExtractor={item => String(item?.id)} 
  renderItem={({item,index})=>(
  <AttractionCard key={item.id} 
  style={index % 2 === 0 ? {marginRight:12}:{}}
   title={item.name} subtitle={item.city} 
   imageSrc={item.images?.length ? item.images[0]:null}/>
)}>

</FlatList>


</SafeAreaView>
  )
}


export default Home;