import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Package from '../../package.json';

const InfoScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text
                style={
                    styles.textStyle
                }>{`Package Name: ${Package.name}`}</Text>
            <Text
                style={
                    styles.textStyle
                }>{`Package Version: ${Package.version}`}</Text>
            <Text
                style={
                    styles.textStyle
                }>{`React Version: ${Package.dependencies['react-native']}`}</Text>
        </View>
    );
};

export { InfoScreen };

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        padding: 10,
        fontSize: 16
    }
});