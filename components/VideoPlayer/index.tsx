import React, { useRef, useState, useEffect } from 'react'
import { View, Text,} from 'react-native';
import {Input, Button} from 'react-native-elements';
import { Video, AVPlaybackStatus } from 'expo-av';

import styles from './styles';

// Type definintion for Episode Object
import {Episode} from '../../types';
import { Playback } from 'expo-av/build/AV';

interface VideoPlayerProps {
    episode: Episode
}


const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;
    const [videoURL, setVideoURL] = useState('');

    const [status, setStatus] = React.useState({});
    const video = React.useRef(null);

    useEffect(() => {
      if (!video) {
          return;
      }
      (async () => {
          await video?.current?.unloadAsync();
          await video?.current?.loadAsync(
              { uri: episode.video },
              {},
              false
          );
      })();
  }, [episode])


    return (
        <View>
        <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: episode.video,
                }}
                posterSource={{
                  uri: episode.poster,
                }}
                posterStyle={{
                  resizeMode: 'cover',
                }}
                usePoster={true}
                useNativeControls
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                onTouchStart={() =>
                  status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
        />
              
        <View style={styles.playbutton}>

        <Button
           type="outline"
           raised={true}
           titleStyle={{
            color: "black",
            fontSize: 16,
        }}
          buttonStyle={{color: "black"}}
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            
          }
        />
      </View>
        </View>
    )
}

export default VideoPlayer