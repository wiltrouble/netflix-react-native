import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Image, FlatList, Pressable } from 'react-native';
import { Text } from '../../components/Themed';

import styles from './styles';

interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string,
        }[]
    }
}

const HomeScreen = (props: HomeCategoryProps) => {
    const { category } = props;
    const navigation = useNavigation();
    const onMoviePress = (movie) => {
        navigation.navigate('MovieDetailsScreen', {id: movie.id})
    }
    return (
      <>
        <Text style={styles.title}>{category.title}</Text>
        <FlatList 
            data={category.movies}
            renderItem={({item}) => (
                <Pressable onPress={() => onMoviePress(item)}>
                    <Image style={styles.image} source={{uri: item.poster}}/>
                </Pressable>
            
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
      </>
  );
}

export default HomeScreen;