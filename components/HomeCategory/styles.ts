import {StyleSheet} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'black',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },

    image: {
        width: 100,
        height: 170,
        resizeMode: 'cover',
        borderRadius: 5,
    }
  });

  export default styles;
