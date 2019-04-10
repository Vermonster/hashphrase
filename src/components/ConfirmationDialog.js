import React from 'react';
import { withNamespaces } from 'react-i18next';
import {
  View, Text, Modal, StyleSheet, Clipboard, TextInput,
} from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { CompletedCheckmark } from '../styles/icons';
import { colors, fontSize, rowCenter } from '../styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    backgroundColor: colors.modalBackground,
  },
  innerContainer: {
    backgroundColor: colors.white,
    width: '95%',
    paddingBottom: '10%',
    borderRadius: 4,
  },
  messagesContainer: {
    backgroundColor: colors.primary,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    display: 'flex',
  },
  messagesTopRow: {
    flexDirection: 'row',
    marginLeft: '5%',
  },
  textColumn: {
    flex: 5,
  },
  hideShowRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordContainer: {
    marginTop: '8%',
    marginBottom: '10%',
    alignSelf: 'center',
    width: '95%',
    backgroundColor: colors.secondary,
    paddingHorizontal: '3%',
    paddingTop: '3%',
    paddingBottom: '5%',
    borderRadius: 4,
    justifyContent: 'center',
  },
  password: {
    flex: 1,
  },
  title: {
    color: colors.secondary,
    fontSize: fontSize.xxl,
    paddingBottom: '5%',
  },
  paragraph: {
    fontSize: fontSize.lg,
  },
  label: {
    fontSize: fontSize.lg,
    color: colors.white,
  },
  accountLabel: {
    marginBottom: 10,
  },
  checkbox: {
    ...rowCenter,
    marginBottom: 37,
  },
  buttonRow: {
    alignSelf: 'center',
  },
  button: {
    width: '80%',
    borderColor: colors.secondary,
    borderWidth: 2,
  },
  closeButton: {
    alignSelf: 'flex-end',
    margin: 0,
  }
});

class ConfirmationDialog extends React.Component {
  state = {
    obscured: true,
  }

  handleClearClipboard = () => Clipboard.setString('');

  toggleObscured = () => {
    this.setState(prevState => ({ obscured: !prevState.obscured }));
  };

  handleSubmit = () => {
    const { closeModal, showSnackbar } = this.props;
    this.handleClearClipboard();
    showSnackbar();
    this.resetState();
    return closeModal();
  }

  resetState() {
    this.setState({ obscured: true });
  }

  render() {
    const { obscured } = this.state;
    const {
      t, visible, generatedPassword, closeModal,
    } = this.props;
    const visibilityIcon = obscured ? 'visibility-off' : 'visibility';

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
                <IconButton
                  icon="close"
                  style={styles.closeButton}
                  onPress={closeModal}
                />
                <View style={styles.messagesTopRow}>
                  <View style={styles.textColumn}>
                    <Text style={styles.title}>{t('completedStatus')}</Text>
                    <Text style={[styles.paragraph, { color: colors.white, width: '80%', marginBottom: 15 }]}>
                      {t('completedClipboard')}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.passwordContainer]}>
                <View style={styles.hideShowRow}>
                  <View style={styles.password}>
                    <Text style={[styles.label, styles.accountLabel]}>
                      {t('accountPassword')}
                    </Text>
                    <TextInput
                      secureTextEntry={obscured}
                      editable={false}
                      style={styles.label}
                    >
                      { generatedPassword }
                    </TextInput>
                  </View>
                  <IconButton
                    icon={visibilityIcon}
                    color={colors.white}
                    onPress={this.toggleObscured}
                    style={styles.hideShowButton}
                  />
                </View>
              </View>
              <View style={styles.buttonRow}>
                <Button
                  testID="submit-form"
                  onPress={this.handleSubmit}
                  accessibilityLabel="ACTION BUTTON"
                  style={styles.button}
                  mode="outlined"
                  color={colors.secondary}
                >
                  {t('button')}
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default withNamespaces('confirmationDialog')(ConfirmationDialog);
export { ConfirmationDialog as TestConfirmationDialog };
