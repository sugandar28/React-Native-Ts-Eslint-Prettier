
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {Hello} from '../Components'

function Home({ navigation }:any) {
    return (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        <View style={styles.container}>
            <Hello />
            <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')} />
        </View>       
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { Home };