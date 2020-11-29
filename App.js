import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import {LogBox} from 'react-native';

LogBox.ignoreWarnings(['Remote debugger']);

const App = () => {
  return (
    <View style={styles.container}>
      <Header headersText={'Albums'} />
      <AlbumList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
