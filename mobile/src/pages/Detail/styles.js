import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

    export default StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 25,
            paddingTop: Constants.statusBarHeight + 20,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        incident: {
            padding: 24,
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            marginBottom: 20,
            marginTop: 50
        },
        incidentProperty: {
            fontSize: 20,
            color: '#41414D',
            fontWeight: 'bold',
            marginTop: 25
        },
        incidentValue: {
            marginTop: 10,
            fontSize: 20,
            color: '#737380'
        },
        contactBox: {
            padding: 24,
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            marginBottom: 20
        },
        heroTitle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#41414D',
            lineHeight: 30
        },
        heroDescription: {
            fontSize: 20,
            color: '#737380',
            marginTop: 20,
            marginBottom: 10
        },
        actions: {
            marginTop: 10,
            flexDirection :'row',
            justifyContent: 'space-between'
        },
        action: {
            backgroundColor: '#E02041',
            borderRadius: 10,
            height: 50,
            width: '48%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        actionText: {
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 'bold',
            textTransform: 'uppercase'
        },
        backButton: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#DCDCE6',
            height: 50,
            width: 50
        }
    });