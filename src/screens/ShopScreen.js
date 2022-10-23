import React from 'react';
import { View, StyleSheet } from 'react-native';
import FullPageWebview from '../components/FullPageWebview';

const SHOP = 'https://merlinembed.loqueue.accesso.com/?embed=true#/services';

const ShopScreen = () => {
    return (
        <View style={styles.wrapper}>
            <FullPageWebview url={SHOP} />
        </View>
    );
};

export { ShopScreen };

const styles = StyleSheet.create({
    wrapper: {
        ...StyleSheet.absoluteFillObject
    }
});