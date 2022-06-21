import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HomeMap, CovidMessage, HomeSearch} from '../../components';

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
      {/* Covid Message */}
      {/* Bottom Comp */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
