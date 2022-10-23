import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const ConfigButton  = ({ onPress, sharedWidthPercentage }) => {
    const { width } = Dimensions.get('screen');

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[styles.main, { width: width * sharedWidthPercentage }]}>
            <Text style={styles.textStyle}>CONFIGURE WEB COMPONENT</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#55AF51',
        borderRadius: 6
    },
    textStyle: {
        color: 'white',
        fontSize: 17,
        letterSpacing: 0.3
    }
});
export default ConfigButton;