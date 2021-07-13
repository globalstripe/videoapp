import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: 'black',
        color: 'white',
    },
    image: {
        height: 75,
        aspectRatio: 16/9,
        resizeMode: 'cover',
        borderRadius: 3,
    },
    titleContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white',
    },
    title: {
        backgroundColor: 'black',
        color: 'white',
    },
    duration: {
        color: 'darkgrey',
        fontSize: 10,
    },
    plot: {
        color: 'darkgrey'
    }
})

export default styles;