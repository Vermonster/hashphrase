import React from 'react';
import { withNamespaces } from 'react-i18next';
import {
  View, Text, Modal, StyleSheet, Clipboard, TextInput, Platform, Dimensions,
} from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { colors, fontSize } from '../styles/base';

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
    // flex: 1 / 2,
    borderRadius: 4,
  },
  messagesContainer: {
    flex: 1 / 3,
    backgroundColor: colors.primary,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    justifyContent: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '95%',
    backgroundColor: colors.secondary,
    borderRadius: 4,
    padding: 6,
  },
  password: {
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: '5%',
  },
  title: {
    color: colors.secondary,
    fontSize: fontSize.xxl,
    marginBottom: '3%',
  },
  paragraph: {
    fontSize: fontSize.lg,
  },
  label: {
    fontSize: fontSize.lg,
    color: colors.white,
  },
  buttonRow: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    flex: 1 / 3,
    // width: 'auto', SET WIDTH % BASED ON OVERALL WIDTH
  },
  button: {
    borderColor: colors.secondary,
    borderWidth: 2,
  },
  closeButton: {
    alignSelf: 'flex-end',
    top: '1%',
    right: '0.5%',
    position: 'absolute',
  },
});

class ConfirmationDialog extends React.Component {
  state = {
    obscured: true,
    window: Dimensions.get('window'),
  }

  componentWillMount = () => {
    Dimensions.addEventListener('change', this.handler);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handler);
  }

  handler = dims => this.setState(dims);

  handleClearClipboard = () => Clipboard.setString('');

  toggleObscured = () => {
    this.setState(prevState => ({ obscured: !prevState.obscured }));
  };

  handleSubmit = () => {
    const { closeModal, showSnackbar, clearForm } = this.props;
    this.handleClearClipboard();
    showSnackbar();
    this.resetState();
    clearForm();
    return closeModal();
  }

  resetState = () => {
    this.setState({ obscured: true });
  }

  modalStyling = (orientation, height, width) => {
    const styling = {};
    // if (orientation === 'landscape') {
    if (width < 600) {
      styling.innerContainerWidth = '95%';
    } else {
      styling.innerContainerWidth = '70%';
    }
    if (height > 800) {
      styling.innerContainerFlex = 1 / 2;
    } else if (height < 350) {
      styling.innerContainerFlex = 4 / 5;
    } else {
      styling.innerContainerFlex = 2 / 3;
    }
    // } else if (orientation === 'portrait') {
    //   styling.inputHt = 1 / 3;
    // }
    return styling;
  }

  render() {
    const { obscured, window } = this.state;
    const { width, height } = window;
    const orientation = height > width ? 'portrait' : 'landscape';
    const {
      t, visible, generatedPassword, closeModal, clearForm,
    } = this.props;
    const visibilityIcon = obscured ? 'visibility-off' : 'visibility';
    const accountLabelMargin = Platform.OS === 'ios' ? (0.02 * height) : 0;
    const dynamicStyles = this.modalStyling(orientation, height, width);
    const { innerContainerWidth, innerContainerFlex } = dynamicStyles;
    console.log(height, width);

    return (
      <View
        style={styles.container}
      >
        <Modal
          animationType="fade"
          transparent
          visible={visible}
          onRequestClose={closeModal}
          supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
        >
          <View style={[styles.container, styles.modalBackground]}>
            <View style={[styles.innerContainer, { width: innerContainerWidth, flex: innerContainerFlex }]}>
              <View style={styles.messagesContainer}>
                <IconButton
                  icon="close"
                  size={35}
                  style={styles.closeButton}
                  onPress={() => { closeModal(); clearForm(); }}
                />
                <View style={{ marginLeft: '4%' }}>
                  <Text style={styles.title}>{t('completedStatus')}</Text>
                  <Text style={[styles.paragraph, { color: colors.white, width: '80%' }]}>
                    {t('completedClipboard')}
                  </Text>
                </View>
              </View>
              <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
                <View style={[styles.passwordContainer]}>
                  <View style={styles.password}>
                    <Text style={[styles.label, { marginBottom: accountLabelMargin }]}>
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
                  <Text>{t('button')}</Text>
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
