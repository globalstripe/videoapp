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
    },
    // Modal
    centeredView: {
        flex: 1,
        justifyContent: "center",  
        alignItems: "center",
        marginTop: 22,
        backgroundColor: '#384240', // This is the modals view background
      },
      modalView: {
        margin: 20,
        backgroundColor: "#528277",   // This is the modals background
        borderRadius: 20,
        padding: 150,
        width: 380,
        height: 800,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
      },
      buttonOpen: {
        marginTop: 20,
        marginLeft: 60,
        padding: 10,
        backgroundColor: '#42a1f5',
        width: 300,
        marginBottom: 10,
        // backgroundColor: "#F194FF",
      },
      buttonClose: {  // Button on the modal //
        marginTop: 20,
        padding: 10,
        backgroundColor: "#2196F3",
        width: 300,
        marginBottom: 10,

      },
      textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        width: 360,
        
      }
})

export default styles;