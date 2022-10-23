/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const DEFAULT =
    'https://homepagecard.s3.eu-west-1.amazonaws.com/legocarddemo.html';

const { width } = Dimensions.get('screen');

const HomeScreenWebView = ({
    uri,
    paramsHeight,
    paramsWidth
}) => {
    const [loading, setLoading] = useState(true);
    const [propWidth, setPropWidth] = useState(null);
    const [propHeight, setPropHeight] = useState(null);
    const [stateUri, setUri] = useState(DEFAULT);

    useEffect(() => {
        setLoading(false);
    }, []);

    useEffect(() => {
        if (uri && uri !== stateUri) {
            setLoading(true);
            setUri(uri);
            setLoading(false);
        }
    }, [uri, stateUri]);

    useEffect(() => {
        if (paramsWidth && paramsWidth !== propWidth) {
            setLoading(true);
            setPropWidth(paramsWidth);
            setLoading(false);
        }
    }, [paramsWidth, propWidth]);

    useEffect(() => {
        if (paramsHeight && paramsHeight !== propHeight) {
            setLoading(true);
            setPropHeight(paramsHeight);
            setLoading(false);
        }
    }, [paramsHeight, propHeight]);

    return (
        <>
            {loading === true ? (
                <ActivityIndicator size={'large'} />
            ) : (
                <View style={styles.main}>
                    <WebView
                        source={{ uri: stateUri }}
                        style={[
                            styles.main,
                            {
                                width: propWidth ? propWidth : width,
                                height: propHeight ? propHeight : 175
                            }
                        ]}
                    />
                </View>
            )}
        </>
    );
};

export default HomeScreenWebView;

const styles = StyleSheet.create({
    main: {
        borderRadius: 10,
        backgroundColor: 'rgba(256,256,256,0)'
    }
});