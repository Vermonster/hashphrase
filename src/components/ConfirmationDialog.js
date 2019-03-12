import React from 'react';
import {
  View, Text, Modal, StyleSheet,
} from 'react-native';
import { Checkbox } from 'react-native-paper';

const styles = StyleSheet.create({
  contentWrap: {
    marginTop: 150,
    borderWidth: 1,
  },
});

const ConfirmationDialog = ({ visible }) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={visible}
    onRequestClose={() => { }}
  >
    <View style={styles.contentWrap}>
      <View>
        <Text>All done!</Text>
        <Text>Your account password is now on your clipboard.</Text>
      </View>
      <View>
        <Text>
          Account Password:
          <Text>1234567</Text>
        </Text>
      </View>
      <View>
        <Text>What would you like to do next?</Text>
        <Checkbox status="checked" onPress={() => {}} />
        <Text>Clear clipboard</Text>
        <Checkbox status="checked" onPress={() => {}} />
        <Text>Make another password</Text>
      </View>
    </View>
  </Modal>
);

export default ConfirmationDialog;
