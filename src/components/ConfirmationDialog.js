import React from 'react';
import { withNamespaces } from 'react-i18next';
import {
  View, Text, Modal, StyleSheet, Clipboard, TextInput,
} from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { CompletedCheckmark } from '../styles/icons';
import CustomCheckbox from './CustomCheckbox';
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
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 4,
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
  button: {
    marginHorizontal: 45,
  },
});

class ConfirmationDialog extends React.Component {
  state = {
    clearClipboard: false,
    obscured: true,
  }

  handleClearClipboard = () => Clipboard.setString('');

  toggleObscured = () => {
    this.setState(prevState => ({ obscured: !prevState.obscured }));
  };

  handleSubmit = () => {
    const { clearClipboard } = this.state;
    const { closeModal, showSnackbar } = this.props;
    if (clearClipboard) {
      this.handleClearClipboard();
      showSnackbar();
    }
    this.setState({ clearClipboard: false });
    this.setState({ obscured: true });
    return closeModal();
  }

  toggleClearClipboard = () => {
    this.setState(prevState => ({ clearClipboard: !prevState.clearClipboard }));
  };

  render() {
    const { clearClipboard, obscured } = this.state;
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
                  <View>
                    <Text style={[styles.label, styles.accountLabel]}>
                      {t('accountPassword')}
                    </Text>
                    <TextInput
                      secureTextEntry={obscured}
                      style={styles.label}
                      numberOfLines={2}
                      ellipsizeMode="clip"
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
              <View style={styles.checkbox}>
                <CustomCheckbox
                  testID="clear-clipboard"
                  status={clearClipboard}
                  handlePress={this.toggleClearClipboard}
                />
                <Text style={styles.paragraph}>{t('clearClipboard')}</Text>
              </View>
              <Button
                testID="submit-form"
                onPress={this.handleSubmit}
                accessibilityLabel="ACTION BUTTON"
                mode="contained"
                dark
                color={colors.primary}
                style={styles.button}
              >
                {t('button')}
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default withNamespaces('confirmationDialog')(ConfirmationDialog);
export { ConfirmationDialog as TestConfirmationDialog };
