import React from 'react';
import { withNamespaces } from 'react-i18next';
import {
  View, Text, Modal, StyleSheet, Clipboard,
} from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
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
  },
  messagesContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 13,
    paddingLeft: 13,
    paddingRight: 13,
  },
  messagesTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  passwordContainer: {
    marginTop: 37,
    marginHorizontal: 10,
    marginBottom: 25,
    backgroundColor: colors.secondary,
    height: 50,
    padding: 13,
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
    fontSize: fontSize.sm,
    color: colors.white,
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

  obscureText = (times) => {
    let num = times;
    let repeatedStr = '';
    while (num > 0) {
      repeatedStr += '\u25CF';
      num -= 1;
    }
    return repeatedStr;
  }

  handleSubmit = () => {
    const { clearClipboard } = this.state;
    const { closeModal, showSnackbar } = this.props;
    if (clearClipboard) {
      this.handleClearClipboard();
      showSnackbar();
    }
    this.setState({ clearClipboard: false });
    return closeModal();
  }

  render() {
    const { clearClipboard, obscured } = this.state;
    const {
      t, visible, generatedPassword, closeModal,
    } = this.props;
    const obscuredPw = this.obscureText(generatedPassword.length);

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
                  <Text style={styles.title}>{t('completedStatus')}</Text>
                  <CompletedCheckmark />
                </View>
                <Text style={[styles.paragraph, { color: colors.white, width: '70%' }]}>{t('completedClipboard')}</Text>
              </View>
              <View style={[styles.passwordContainer]}>
                <Text style={styles.label}>
                  {t('accountPassword')}
                </Text>
                <Text style={styles.label}>
                  {obscured ? obscuredPw : generatedPassword}
                </Text>
              </View>
              <View style={styles.checkbox}>
                <Text style={styles.paragraph}>{t('clearClipboard')}</Text>
                <Checkbox
                  testID="clear-clipboard"
                  status={clearClipboard ? 'checked' : 'unchecked'}
                  onPress={() => this.setState({ clearClipboard: !clearClipboard })}
                />
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
