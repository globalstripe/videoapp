import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Button} from 'react-native';
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

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    return (
        <View>
        <Video
                ref={video}
                style={styles.video}
                usePoster={true}
                posterSource={{
                    uri: episode.poster,
                }}
                source={{
                  uri: episode.video,
                }}
                useNativeControls
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
              <View style={styles.buttons}>
        <Button
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