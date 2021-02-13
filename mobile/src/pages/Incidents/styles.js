import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

    export default StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 25,
            paddingTop: Constants.statusBarHeight + 20
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        headerText: {
            fontSize: 18,
            color: '#41414D'
        },
        headerTextBold: {
            fontWeight: 'bold'
        },
        title: {
            fontSize: 30,
            marginBottom: 16,
            marginTop: 40,
            color: '#41414D',
            fontWeight: 'bold'
        },
        description: {
            fontSize: 18,
            lineHeight: 24,
            color: '#737380'
        },
        incidentList: {
            marginTop: 30,
        },
        incident: {
            padding: 24,
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            marginBottom: 20
        },
        incidentProperty: {
            fontSize: 20,
            color: '#41414D',
            fontWeight: 'bold'
        },
        incidentValue: {
            marginTop: 10,
            fontSize: 20,
            marginBottom: 24,
            color: '#737380'
        },
        detailsView: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        detailsButton: {
            paddingHorizontal: 15,
            backgroundColor: '#E02041',
            borderRadius: 10,
            height: 50
        },
        detailsButtonText: {
            color: '#FFFFFF',
            lineHeight: 60,
            borderRadius: 10,
            fontSize: 18,
            fontWeight: 'bold',
            textTransform: 'uppercase'
        },
        detailsButtonIcon: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#DCDCE6',
            height: 50,
            width: 50
        }
    });