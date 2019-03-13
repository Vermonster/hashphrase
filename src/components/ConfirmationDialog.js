import React from 'react';
import {
  View, Text, Modal, StyleSheet,
} from 'react-native';
import { Button, Checkbox } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default class ConfirmationDialog extends React.Component {
  state = { checked: false }

  render() {
    const { visible, generatedPassword } = this.props;
    const { checked } = this.state;

    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent
          visible={visible}
          onRequestClose={() => { }}
        >
          <View style={[styles.container, styles.modalBackground]}>
            <View style={styles.innerContainer}>
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
              <Button
                onPress={() => {}}
                accessibilityLabel="CHOOSE ACTION BUTTON"
                mode="contained"
                dark
                color="#D37F26"
              >
                OKAY
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
