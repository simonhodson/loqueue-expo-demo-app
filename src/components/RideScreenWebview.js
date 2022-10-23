import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const RIDE = 'https://merlinembed.loqueue.accesso.com/?embed=true#/rides/7da90a4a-a1d6-45d9-87a7-942f80ed4a56';
const { width } = Dimensions.get('screen');

const RideScreenWebview = () => {
    return (
        <View style={styles.main}>
            <WebView source={{ uri: RIDE }} style={styles.main} />
        </View>
    );
};

export default RideScreenWebview;

const styles = StyleSheet.create({
    main: {
        width: width,
        flex: 1
    }
});