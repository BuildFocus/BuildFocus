import React, {setState, setResponse, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {FAB, Portal, Provider} from 'react-native-paper';
import type {Node} from 'react';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import {Text, View, StyleSheet, Image, Platform} from 'react-native';

const App: () => Node = () => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const [response, setResponse] = React.useState(null);

  const {open} = state;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {response?.assets &&
        response?.assets.map(({uri}) => (
          <View key={uri} style={styles.image}>
            <Image
              resizeMode="cover"
              resizeMethod="scale"
              style={{width: 200, height: 200}}
              source={{uri: uri}}
            />
          </View>
        ))}
      <Provider>
        <Portal>
          <FAB.Group
            fabStyle={styles.fab}
            open={open}
            icon={open ? 'camera' : 'camera'}
            actions={[
              {
                icon: 'camera',
                small: false,
                onPress: () => {
                  launchCamera(
                    {
                      saveToPhotos: true,
                      mediaType: 'photo',
                      includeBase64: false,
                    },
                    setResponse,
                  );
                },
              },
              {
                icon: 'image-area',
                small: false,
                onPress: () => {
                  launchImageLibrary(
                    {
                      selectionLimit: 0,
                      mediaType: 'photo',
                      includeBase64: false,
                    },
                    setResponse,
                  );
                },
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#EA5B70',
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
});
// Test
export default App;
