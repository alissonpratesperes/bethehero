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
            fontSize: 16,
            color: '#000000'
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
            fontSize: 16,
            lineHeight: 24,
            color: '#737380'
        }
    });