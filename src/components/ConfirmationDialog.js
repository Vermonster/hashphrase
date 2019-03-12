import React from 'react';
import {
  View, Text, Modal, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  contentWrap: {
    marginTop: 50,
    borderWidth: 1,
  }
})

const ConfirmationDialog = () => (
  <Modal
    animationType="slide"
    transparent={false}
    visible
    onRequestClose={() => { }}
  >
    <View style={styles.contentWrap}>
      <Text>Hello World!</Text>
    </View>
  </Modal>
);

export default ConfirmationDialog;
