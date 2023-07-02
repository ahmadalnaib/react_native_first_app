import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttractionCard";

const Home =() =>{
  const [selectedCategory,setSelectedCategory]=useState('All');
  return (
<SafeAreaView>
  <View style={styles.container}>
 <Title text="Where do" style={{fontWeight:'normal'}}/>
 <Title text="you want to go"/>
 <Title text="Explore Attractions" style={styles.subtitle}/>
 <Categories selectedCategory={selectedCategory} onCategoryPress={setSelectedCategory} categories={['All','Popular','Historical','Laravel','React','Vue','Germany']}/>
<View style={styles.row}>

 <AttractionCard title='Entertainment Park' subtitle='Rome' imageSrc='https://source.unsplash.com/random/1920x1080/?wallpaper,landscape'/>
 <AttractionCard title='Home' subtitle='Kulmbach' imageSrc='https://source.unsplash.com/random/1920x1080/?wallpaper,landscape'/>
</View>
  </View>
</SafeAreaView>
  )
}


export default Home;