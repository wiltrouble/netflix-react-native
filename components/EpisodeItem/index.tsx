import React from 'react'
import { Text, View } from "../../components/Themed";
import { Image, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import styles from "./styles";
import { Episode } from '../../types';

interface EpisodeItemProps {
    episode: Episode;
    onPress: (Episode) => {

    }
}

const EpisodeItem = (props: EpisodeItemProps) => {
    const { episode, onPress } = props;

    return (
        <Pressable style={{margin: 10}} onPress={() => onPress(episode)}>
            <View style={styles.row}>
                <Image style={styles.image} source={{uri: episode.poster}}></Image>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.title}>{episode.duration}</Text>
                </View>
                <Feather name="download" size={24} color="black" />
            </View>

            <Text style={styles.plot}>{episode.plot}</Text>
        </Pressable>
    )
}

export default EpisodeItem;
