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
  },
  modalBackground: {
    backgroundColor: colors.modalBackground,
  },
  innerContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 10,
    paddingBottom: 48,
    borderRadius: 4,
  },
  messagesContainer: {
    backgroundColor: colors.primary,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    paddingVertical: 13,
    paddingHorizontal: 13,
    display: 'flex',
  },
  messagesTopRow: {
    flexDirection: 'row',
  },
  textColumn: {
    flex: 5,
  },
  iconColumn: {
    flex: 1,
  },
  hideShowRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordContainer: {
    marginTop: 37,
    marginHorizontal: 10,
    marginBottom: 25,
    backgroundColor: colors.secondary,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 4,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  password: {
    flex: 1,
  },
  title: {
    color: colors.secondary,
    fontSize: fontSize.xxl,
    paddingBottom: 20,
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
                <View style={styles.messagesTopRow}>
                  <View style={styles.textColumn}>
                    <Text style={styles.title}>{t('completedStatus')}</Text>
                    <Text style={[styles.paragraph, { color: colors.white, width: '80%', marginBottom: 15 }]}>
                      {t('completedClipboard')}
                    </Text>
                  </View>
                  <View style={styles.iconColumn}>
                    <CompletedCheckmark />
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
