import React from 'react';
import { withNamespaces } from 'react-i18next';
import {
  View, Text, Modal, StyleSheet, Clipboard,
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
  },
  messagesContainer: {
    backgroundColor: '#E07926',
    padding: 10,
  },
  passwordContainer: {
    padding: 10,
    backgroundColor: '#212A59',
  },
  title: {
    fontSize: 25,
  },
  paragraph: {
    fontSize: 15,
  },
  label: {
    fontSize: 12,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  column: {
    flexDirection: 'column',
  },
});

export default class ConfirmationDialog extends React.Component {
  state = { clearClipboard: false }

  handleClearClipboard = () => Clipboard.setString('');

  handleSubmit = () => {
    const { clearClipboard } = this.state;
    const { closeModal } = this.props;
    if (clearClipboard) this.handleClearClipboard();
    this.setState({ clearClipboard: false });
    return closeModal();
  }

  render() {
    const { visible, generatedPassword, closeModal } = this.props;
    const { clearClipboard } = this.state;
    const {
      t, visible, generatedPassword, closeModal,
    } = this.props;
    const { checked } = this.state;

    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent
          visible={visible}
          onRequestClose={closeModal}
        >
          <View style={[styles.container, styles.modalBackground]}>
            <View style={styles.innerContainer}>
              <View style={styles.messagesContainer}>
                <Text style={styles.title}>{t('completedStatus')}</Text>
                <Text style={styles.paragraph}>{t('completedClipboard')}</Text>
              </View>
              <View  style={[styles.passwordContainer]}>
                <Text style={styles.label}>
                  {t('accountPassword')}
                  <Text  style={styles.label}>{generatedPassword}</Text>
                </Text>
              </View>
              <Text style={styles.paragraph}>{t('nextSteps')}</Text>
              <View style={styles.row}>
                <Text style={styles.paragraph}>{t('clearClipboard')}</Text>
                <Checkbox status="checked" onPress={() => this.setState({ checked: !checked })} />
                <Text>{t('anotherPassword')}</Text>
                <Checkbox
                  status={clearClipboard ? 'checked' : 'unchecked'}
                  onPress={() => this.setState({ clearClipboard: !clearClipboard })}
                />
              </View>
            </View>
            <Button
              onPress={this.handleSubmit}
              accessibilityLabel="CHOOSE ACTION BUTTON"
              mode="contained"
              dark
              color="#D37F26"
            >
              {t('confirmOk')}
            </Button>
            </View>
        </Modal>
      </View>
    );
  }
}

export default withNamespaces()(ConfirmationDialog);
