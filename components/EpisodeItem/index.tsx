import React from 'react'
import { Text, View } from "../../components/Themed";
import { Image } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import styles from "./styles";

interface EpisodeItemProps {
    episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string,
    }
}

const EpisodeItem = (props: EpisodeItemProps) => {
    const { episode } = props;

    return (
        <View style={{marginVertical: 10}}>
            <View style={styles.row}>
                <Image style={styles.image} source={{uri: episode.poster}}></Image>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.title}>{episode.duration}</Text>
                </View>
                <Feather name="download" size={24} color="black" />
            </View>

            <Text style={styles.plot}>{episode.plot}</Text>
        </View>
    )
}

export default EpisodeItem;
