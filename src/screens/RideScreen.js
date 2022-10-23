import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import RideScreenWebview from '../components/RideScreenWebview';

const RIDE_IMAGE = 'https://merlinembedcache.loqueue.accesso.com/api/api/guest/rides/7da90a4a-a1d6-45d9-87a7-942f80ed4a56/images/0?v=d30b36ec0c535bdfc9a293e8b24b7aac';

const RideScreen = () => {
    return (
        <SafeAreaView style={styles.main}>
            <>
                <Image
                    source={{ uri: RIDE_IMAGE }}
                    style={styles.imageWrapper}
                />
            </>
            <RideScreenWebview />
        </SafeAreaView>
    );
};

export { RideScreen };

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    imageWrapper: {
        width: '100%',
        height: 180
    }
})