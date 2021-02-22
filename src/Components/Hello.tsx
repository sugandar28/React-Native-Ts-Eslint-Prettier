/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { demoAction } from '../Redux/Actions';

function Hello() {
    const dispatch = useDispatch();
    const { SayHi } = useSelector((state: any) => state.demoReducer);
    const AfterClick = "Hi ..!";
    const beforeClick = "";
    return (
        <View style={styles.container}>
            <Text>{SayHi ? AfterClick : beforeClick}</Text>
            <Button
                title={ SayHi ? 'Back' : 'Click me to say Hi' }
                onPress={() => { dispatch(demoAction()) }} />
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

export { Hello };