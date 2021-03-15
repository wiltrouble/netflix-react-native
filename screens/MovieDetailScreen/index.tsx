import React from 'react'
import { View, Text } from "../../components/Themed";
import { Image, Pressable } from "react-native";
import { MaterialIcons, Entypo, AntDesign, Ionicons } from '@expo/vector-icons'; 
import EpisodeItem from "../../components/EpisodeItem";


import movies from "../../assets/data/movie";
import styles from './styles'

const firstEpisode = movies.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
    return (
        <View>
            
            <Image style={styles.image} source={{uri: firstEpisode.poster}}/>
            
            <View style={{padding: 12}}>
                <EpisodeItem episode={firstEpisode}/>
                <Text style={styles.title}>{movies.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.match}>97% match</Text>
                    <Text style={styles.year}>{movies.year}</Text>
                    <View style={styles.ageContainer}>
                        <Text style={styles.age}>12+</Text>
                    </View>
                    <Text style={styles.year}>{movies.numberOfSeasons} Seasons</Text>
                    <MaterialIcons name="hd" size={24} color="white" />


                </View>
            </View>

            {/* Play Button */}
            <Pressable onPress={() => { console.warn('Plage')}} style={styles.playButton}>
                <Text style={styles.playButtonText}>
                    <Entypo name="controller-play" size={20} color="black" />
                    Play
                </Text>
            </Pressable>

            {/* Download Button */}
            <Pressable onPress={() => { console.warn('Download')}} style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>
                    <AntDesign name="download" size={24} color="white" style={{paddingRight: 5}} />
                    {' '}
                    Download
                </Text>
            </Pressable>

            <Text style={{marginVertical: 10}}>{movies.plot}</Text>
            <Text style={styles.year}>Cast: {movies.cast}</Text>
            <Text>Creator: {movies.creator}</Text>

            {/* Row with icon buttons */}
            <View style={{flexDirection: 'row'}}>
                <View style={{alignItems: 'center', marginHorizontal: 20}}>
                    <AntDesign name="plus" size={24} color="white" />
                    <Text style={{color: 'darkgray', marginTop: 5}}>My List</Text>
                </View>

                <View style={{alignItems: 'center', marginHorizontal: 20}}>
                    <AntDesign name="like2" size={24} color="white" />
                    <Text style={{color: 'darkgray', marginTop: 5}}>Rate</Text>
                </View>

                <View style={{alignItems: 'center', marginHorizontal: 20}}>
                    <Ionicons name="ios-share-outline" size={24} color="white" />
                    <Text style={{color: 'darkgray', marginTop: 5}}>Share</Text>
                </View>
            </View>
        </View>
    )
}

export default MovieDetailsScreen;
