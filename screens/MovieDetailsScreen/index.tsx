import React, { useState, useEffect } from 'react'
import {Text, View } from '../../components/Themed';
import styles from './styles';
import {Image, Pressable, FlatList } from 'react-native';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons'; 

//import { Movie, Season, Episode } from '../../src/models';

import movie from '../../assets/data/movie';
import EpisodeItem from '../../components/EpisodeItem';

const firstSeason = movie.seasons.items[0];
const firstEpisode = movie.seasons.items[0].episodes.items[0];


const MoviewDetailsScreen = () => {

    const [currentEpisode, setCurrentEpisode] = useState(undefined);

// console.log(firstEpisode)
    return (

        <View style={{backgroundColor: 'black'}}>
            <Image style={styles.image} source={{uri: firstEpisode.poster}}/>

            <FlatList
                data={firstSeason.episodes.items}
                renderItem={({item}) => <EpisodeItem episode={item} />}
                style={{marginBottom: 200}}
                ListHeaderComponent={(
                    <View style={{backgroundColor: 'black', padding: 12}}>        
                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={{flexDirection: 'row', backgroundColor: 'black', paddingTop: 10,paddingLeft: 5,}} >
                            <Text style={styles.match}>98% Match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                            </View>
                           <Text style={styles.year}>Seasons: {movie.numberOfSeasons}</Text>
                        <MaterialIcons name="hd" size={24} color="white"/>
            
                        </View>
                                {/* Play Button */ }
                                <Pressable onPress={() => {alert('Play)')}} style={styles.playButton}>
                                    <Text style={styles.playButtonText}>
                                        <Entypo name="controller-play" size={24} color='black' />
                                        Play
                                    </Text>
            
                                </Pressable>
            
                                {/* Play Button */ }
                            <Pressable onPress={() => {alert('Download)')}} style={styles.downloadButton}>
                                    <Text style={styles.downloadButtonText}>
                                        <AntDesign name="download" size={24} color='white' />
                                        Download
                                    </Text>
            
                                </Pressable>
            
                                <Text style={styles.plot} >{movie.plot}</Text>
                                <Text style={styles.cast}>Cast: {movie.cast}</Text>
                                <Text style={styles.cast}>Creator: {movie.creator}</Text>
                        
                                    {/* Row with icon buttons */}
                                    <View style={{flexDirection: 'row', marginTop: 20, backgroundColor: 'black'}}>
                                        <View style={{alignItems: 'center', marginHorizontal: 20, backgroundColor: 'black'}}>
                                            <AntDesign name="plus" size={24} color={'white'} />
                                            <Text style={{color: 'darkgrey', marginTop: 5}}>My List</Text>
                                        </View>
            
                                        <View style={{alignItems: 'center', marginHorizontal: 20, backgroundColor: 'black'}}>
                                            <Feather name="thumbs-up" size={24} color="white" />
                                            <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
                                        </View>
            
                                        <View style={{alignItems: 'center', marginHorizontal: 20, backgroundColor: 'black'}}>
                                            <FontAwesome name="send-o" size={24} color="white" />
                                            <Text style={{color: 'darkgrey', marginTop: 5 }}>Share</Text>
                                        </View>
                                    </View>
                                </View>
                    )}
            />
                        
        </View>
    )
};

export default MoviewDetailsScreen;