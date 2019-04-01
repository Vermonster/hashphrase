import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { colors } from '../styles/base';

const styles = StyleSheet.create({
  box: {
    height: 30,
    width: 30,
    borderRadius: 3,
    borderWidth: 3,
    marginRight: 20,
    borderColor: colors.secondary,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const CustomCheckbox = (props) => {
  const { status, handlePress } = props;
  const checkBox = (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.box}>
        {status && <IconButton color={colors.secondary} icon="done" />}
      </View>
    </TouchableOpacity>
  );
  return checkBox;
};

export default CustomCheckbox;
