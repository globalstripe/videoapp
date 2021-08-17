import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'black',
    },
    image: {
        width: '100%',
        aspectRatio: 16/9,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 10,
        paddingLeft: 5,
    },
    match: {
        color: '#59d467',
        fontWeight: 'bold',
        marginRight: 5,
    },
    year: {
        color: '#757575',
        marginRight: 5,
    },
    plot: {
        color: '#757575',
        marginVertical: 10,
    },
    cast: {
        color: '#757575',
        marginVertical: 10,
    },

    ageContainer: {
        backgroundColor: '#e6e229',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        paddingHorizontal: 3,
        marginRight: 5,
    },
    age: {
        color: 'white',
        fontWeight: 'bold'
    },

    // Button
    playButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 5,
    },
    playButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    downloadButton: {
        backgroundColor: '#2b2b2b',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 5,
    },
    downloadButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;