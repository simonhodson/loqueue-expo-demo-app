import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const FullPageWebview = ({ url }) => { 

    return (
        <View style={styles.main}>
            <WebView source={{ uri: url }} style={styles.main} />
        </View>
    );
};

export default FullPageWebview ;

const styles = StyleSheet.create({
    main: {
        ...StyleSheet.absoluteFillObject,
    },
});