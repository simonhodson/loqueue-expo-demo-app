import React from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import BarcodeMask from 'react-native-barcode-mask';

const { height, width } = Dimensions.get('screen');

const Scanner = ({
    handleCodeScanned,
    onRequestClose
}) => {
    return (
        <View style={styles.main}>
            <TouchableOpacity
                onPress={onRequestClose}
                style={styles.closeButton}>
                <Text style={styles.lightText}>{`X  `}</Text>
                <Text style={styles.lightText}>Close</Text>
            </TouchableOpacity>
            <Camera
                barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]
                }}
                onBarCodeScanned={(result) =>
                    handleCodeScanned(result)
                }
                style={styles.camera}
            >
                <BarcodeMask
                    showAnimatedLine={false}
                    width={"60%"}
                    height={"50%"}
                    edgeBorderWidth={3}
                />
            </Camera>
        </View>
    );
};

export default Scanner;

const styles = StyleSheet.create({
    main: {
        ...StyleSheet.absoluteFillObject,
        marginTop: -40,
        backgroundColor: 'rgba(1, 1, 1, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height,
        width,
        paddingBottom: 100
    },
    camera: {
        width: '100%',
        height: '65%'
    },
    closeButton: {
        position: 'absolute',
        top: 60,
        right: 20,
        zIndex: 999,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 40,
        backgroundColor: 'grey',
        borderRadius: 100
    },
    lightText: {
        color: 'white',
        fontSize: 20
    }
});