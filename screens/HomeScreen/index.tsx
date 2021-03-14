import * as React from 'react';

import { FlatList } from 'react-native';
import { View } from '../../components/Themed';

import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from "../../components/HomeCategory";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* list of categories */}
      <FlatList
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default HomeScreen;