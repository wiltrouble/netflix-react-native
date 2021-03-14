import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Image, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';

import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from "../../components/HomeCategory";

const firstCategory = categories.items[4];
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* list of categories */}
      <FlatList
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item}/>}
        showsVerticalScrollIndicator={false}
      />
      {/* <HomeCategory category={firstCategory} /> */}
    </View>
  );
}

export default HomeScreen;