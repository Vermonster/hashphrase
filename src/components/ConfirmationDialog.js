import React from 'react';
import {
  View, Text, Modal, StyleSheet,
} from 'react-native';
import { Button, Checkbox } from 'react-native-paper';

const styles = StyleSheet.create({
  contentWrap: {
    marginTop: 150,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class ConfirmationDialog extends React.Component {
  state = { checked: false }

  clearClipboard = () => {

  }

  handleSubmit = () => {

  }

  render() {
    const { visible, generatedPassword } = this.props;
    const { checked } = this.state;
    console.log(checked);
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => { }}
        style={styles.modal}
      >
        <View style={styles.contentWrap}>
          <View>
            <Text>All done!</Text>
            <Text>Your account password is now on your clipboard.</Text>
          </View>
          <View>
            <Text>
              Account Password:
              <Text>{generatedPassword}</Text>
            </Text>
          </View>
          <View>
            <Text>What would you like to do next?</Text>
            <View>
              <Text>Clear clipboard</Text>
              <Checkbox status="checked" onPress={() => this.setState({ checked: !checked })} />
            </View>
          </View>
        </View>
        <Button
          onPress={this.handleSubmit}
          accessibilityLabel="CHOOSE ACTION BUTTON"
          mode="contained"
          dark
          color="#D37F26"
        >
          OKAY
        </Button>
      </Modal>
    );
  }
}
