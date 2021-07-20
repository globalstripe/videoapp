import {StyleSheet} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    video: {
        borderRadius: 5,
        width: '100%',
        aspectRatio: 16/9,
    },
    button: {
        color: 'red',
        backgroundColor: 'yellow',
    },

    playbutton: {
        margin: 5,
        marginTop: 158,
        position: "absolute",
        top: 15,
        left: 110,
        width: 180,
        height: 100,
    }
  });

  export default styles;
