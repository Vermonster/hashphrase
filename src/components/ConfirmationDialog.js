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

class ConfirmationDialog extends React.Component {
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
<<<<<<< HEAD
<<<<<<< HEAD
              <View style={[styles.passwordContainer]}>
                <Text style={styles.label}>
                  {t('accountPassword')}
                  <Text style={styles.label}>{generatedPassword}</Text>
=======
              <View  style={[styles.passwordContainer]}>
                <Text style={styles.label}>
                  {t('accountPassword')}
                  <Text  style={styles.label}>{generatedPassword}</Text>
>>>>>>> add confirmationDialog text to i18n
=======
              <View style={[styles.passwordContainer]}>
                <Text style={styles.label}>
                  {t('accountPassword')}
                  <Text style={styles.label}>{generatedPassword}</Text>
>>>>>>> namespace translations by component
                </Text>
              </View>
              <Text style={styles.paragraph}>{t('nextSteps')}</Text>
              <View style={styles.row}>
                <Text style={styles.paragraph}>{t('clearClipboard')}</Text>
<<<<<<< HEAD
<<<<<<< HEAD
                <Checkbox
                  testID="clear-clipboard"
                  status="checked"
                  onPress={() => this.setState({ checked: !checked })}
                />
                <Text>{t('anotherPassword')}</Text>
                <Checkbox
                  testID="new-password"
=======
                <Checkbox status="checked" onPress={() => this.setState({ checked: !checked })} />
                <Text>{t('anotherPassword')}</Text>
                <Checkbox
>>>>>>> add confirmationDialog text to i18n
=======
                <Checkbox
                  testID="clear-clipboard"
                  status="checked"
                  onPress={() => this.setState({ checked: !checked })}
                />
                <Text>{t('anotherPassword')}</Text>
                <Checkbox
<<<<<<< HEAD
                  className="new-password"
>>>>>>> wip i18n
=======
                  testID="new-password"
>>>>>>> use testIDs instead of classnames and update snapshots
                  status={clearClipboard ? 'checked' : 'unchecked'}
                  onPress={() => this.setState({ clearClipboard: !clearClipboard })}
                />
              </View>
            </View>
            <Button
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              testID="submit-form"
=======
>>>>>>> add confirmationDialog text to i18n
=======
              className="submit-form"
>>>>>>> wip i18n
=======
              testID="submit-form"
>>>>>>> use testIDs instead of classnames and update snapshots
              onPress={this.handleSubmit}
              accessibilityLabel="CHOOSE ACTION BUTTON"
              mode="contained"
              dark
              color="#D37F26"
            >
              {t('confirmOk')}
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD
          </View>
=======
            </View>
>>>>>>> add confirmationDialog text to i18n
=======
          </View>
>>>>>>> namespace translations by component
        </Modal>
      </View>
    );
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default withNamespaces('confirmationDialog')(ConfirmationDialog);
export { ConfirmationDialog as TestConfirmationDialog };
=======



=======
>>>>>>> add confirmationDialog text to i18n
export default withNamespaces()(ConfirmationDialog);
>>>>>>> export components without i18n providers for testing
=======

export { ConfirmationDialog as TestConfirmationDialog };

export default withNamespaces('confirmationDialog')(ConfirmationDialog);
>>>>>>> namespace translations by component
=======
export default withNamespaces('confirmationDialog')(ConfirmationDialog);
export { ConfirmationDialog as TestConfirmationDialog };
>>>>>>> wip i18n
