import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Platform,
    Dimensions,
    Modal,
    Alert
} from 'react-native';
import MapView from 'react-native-maps';
// import {
//     check,
//     PERMISSIONS,
//     RESULTS,
//     request,
//     openSettings
// } from 'react-native-permissions';
import MapImage from '../assets/ruscombe_demo.png';
import HomeScreenWebView from '../components/HomeScreenWebview';
import ConfigButton from '../components/ConfigButton';
import Scanner from '../components/Scanner';
import { Camera } from 'expo-camera';
import { URL } from 'react-native-url-polyfill';

const { width } = Dimensions.get('screen');
const shared_width_percentage = 0.9;

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [hasPermissions, setPermissions] = useState(false);
    const [uriData, setUriData] = useState({
        uri: null,
        height: null,
        width: null
    });

 
    const modalClose = () => {
        setModalVisible(false);
    };

    const handleConfigPressed = async () => {
        if (hasPermissions) {
            setModalVisible(true);
        } else {
            const perms = await Camera.getCameraPermissionsAsync();
            if (perms.granted) {
                setModalVisible(true);
            } else {
                await Camera.requestCameraPermissionsAsync();
            }
        }

    };

    //#region - Code Scanned
    // TODO: Better handle net work and failure
    const handleCodeScanned = async (e) => {
        setModalVisible(false);
        // console.log('SCANNED DATA ==> ', e.data);
        if (e.data && typeof e.data === 'string') {
            try {
                const response = await fetch(e.data);
                if (response.ok) {
                    setUriData(prepareParams(e.data));
                }
            }
            catch(err) {
                console.log('Error --> ', err)
            }
        }
    };

    const prepareParams = (uri) => {
        const urlObject = new URL(uri);

        let propsObject = {
            uri,
            height: null,
            width: null
        };

        if (!urlObject.searchParams) return propsObject;

        urlObject.searchParams.forEach((value, key) => {
            if (key === 'width') {
                const valNumber = value.match(/\d/g);

                if (valNumber) {
                    propsObject.width = parseInt(valNumber.join(''), 10);
                }
            }

            if (key === 'height') {
                const valNumber = value.match(/\d/g);

                if (valNumber) {
                    propsObject.height = parseInt(valNumber.join(''), 10);
                }
            }
        });

        return propsObject;
    };

    //#endregion
    return (
        <>
            {Platform.OS === 'android' ? (
                <View style={StyleSheet.absoluteFillObject}>
                    <Image source={MapImage} style={styles.googleWrapper} />
                    <View style={styles.webView}>
                        <HomeScreenWebView
                            paramsHeight={uriData.height}
                            paramsWidth={uriData.width}
                            uri={uriData.uri}
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <ConfigButton
                            sharedWidthPercentage={0.9}
                            onPress={handleConfigPressed}
                        />
                    </View>
                </View>
            ) : (
                <View style={StyleSheet.absoluteFillObject}>
                    <MapView
                        style={StyleSheet.absoluteFillObject}
                        initialRegion={{
                            latitude: 51.4641988,
                            longitude: -0.6500235,
                            latitudeDelta: 0.001, // Distance North/South to span
                            longitudeDelta: 0.003 // Distance East/West to span
                        }}
                    />
                    <View style={styles.webView}>
                        <HomeScreenWebView
                            paramsHeight={uriData.height}
                            paramsWidth={uriData.width}
                            uri={uriData.uri}
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <ConfigButton
                            sharedWidthPercentage={0.9}
                            onPress={handleConfigPressed}
                        />
                    </View>
                </View>
            )}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={modalClose}>
                <View style={styles.centeredView}>
                    <Scanner
                        handleCodeScanned={handleCodeScanned}
                        onRequestClose={modalClose}
                    />
                </View>
            </Modal>
        </>
    );
};

export { HomeScreen };

const styles = StyleSheet.create({
    googleWrapper: {
        width: '100%',
        height: '100%'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    webView: {
        backgroundColor: 'rgba(256,256,256,0)',
        position: 'absolute',
        top: 100,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 20,
        left: (width - width * shared_width_percentage) / 2
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    }
});