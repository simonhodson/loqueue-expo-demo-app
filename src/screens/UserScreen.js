import React from 'react';
import { View, StyleSheet } from 'react-native';
import FullPageWebview from '../components/FullPageWebview';

const LOGIN = 'https://merlinembed.loqueue.accesso.com/?embed=true#/logon';

const UserScreen = () => {
    return (
        <View style={styles.wrapper}>
            <FullPageWebview url={LOGIN} />
        </View>
    );
};

export { UserScreen };

const styles = StyleSheet.create({
    wrapper: {
        ...StyleSheet.absoluteFillObject
    }
});