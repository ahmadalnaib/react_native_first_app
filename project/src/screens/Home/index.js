import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttractionCard";
import jsonData from '../../data/data.json'

const Home =() =>{
  const [selectedCategory,setSelectedCategory]=useState('All');
  const [data,setData]=useState([]);

  useEffect(()=>{
setData(jsonData);
  },[])
  return (
<SafeAreaView>
  <View style={styles.container}>
 <Title text="Where do" style={{fontWeight:'normal'}}/>
 <Title text="you want to go"/>
 <Title text="Explore Attractions" style={styles.subtitle}/>
 <Categories selectedCategory={selectedCategory} onCategoryPress={setSelectedCategory} categories={['All','Popular','Historical','Laravel','React','Vue','Germany']}/>

<ScrollView contentContainerStyle={styles.row}>
{data?.map((item,index) =>(
  <AttractionCard style={index %2 ===0 ? {marginRight:12} : {}} key={item.id} title={item.name} subtitle={item.city} imageSrc={item.images?.length ? item.images[0] : null}/>

))}

</ScrollView>
  </View>
</SafeAreaView>
  )
}


export default Home;