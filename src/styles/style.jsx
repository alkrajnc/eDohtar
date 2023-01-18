import { StyleSheet } from "react-native"

export default StyleSheet.create({
    app: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2c363b',
        justifyContent: 'space-between',
    }
    ,
    container: {
        flex: 0,
        backgroundColor: '#2c363b',
    },
    naslov: {
        color: 'white',
        margin: 0,
        padding: 10,
        textAlign: 'center',
        fontSize: 40,
        fontFamily: 'Roboto',
        backgroundColor: '#3c4b52',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10,
    },
    card: {
        backgroundColor: 'white',
        height: 196,
        marginBottom: 10,
        borderColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        boxShadow: '1px 2px 12px #F4AAB9',
    },
    cardContainer: {
        flex: 0,
        margin: 5,
    },
    navbar: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#2c454f',
        justifyContent: 'space-around',
        height: 48,
        alignContent: 'center',
        alignItems: 'center',
    
    },
    navimages:{
        width: 32,
        height: 32,
        padding: 2,
        margin: 5,
    },
    
})
    

    
