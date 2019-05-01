import React from 'react';
import { withNamespaces } from 'react-i18next';
import {
  View, Modal, StyleSheet, TextInput, Dimensions,
} from 'react-native';
import {
  Button,
  IconButton,
  Text,
} from 'react-native-paper';
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
    borderRadius: 4,
    paddingHorizontal: '5%',
  },
  messagesContainer: {
    flex: 1 / 2,
    paddingTop: '5%',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  passwordContainer: {
    flex: 1 / 3,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  title: {
    color: colors.primary,
    fontSize: fontSize.xxl,
    marginBottom: '3%',
    fontFamily: 'lato-bold',
  },
  paragraph: {
    fontSize: fontSize.lg,
  },
  password: {
    fontSize: fontSize.lg,
    color: colors.secondary,
    flex: 1,
    paddingLeft: '3%',
    fontFamily: 'lato-regular',
  },
  buttonRow: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    flex: 1 / 2,
  },
});

class ConfirmationDialog extends React.Component {
  state = {
    obscured: true,
    window: Dimensions.get('window'),
  }

  toggleObscured = () => {
    this.setState(prevState => ({ obscured: !prevState.obscured }));
  };

  handleSubmit = () => {
    const {
      closeModal, clearForm, resetToggleSwitch,
    } = this.props;
    this.resetObscured();
    clearForm();
    resetToggleSwitch();
    return closeModal();
  }

  resetObscured = () => {
    this.setState({ obscured: true });
  }

  modalStyling = (height, width) => {
    const styling = {};

    if (width < 600) {
      styling.innerContainerWidth = '95%';
    } else {
      styling.innerContainerWidth = '60%';
    }

    // Dynamic modal size for iphone 8s and below, iphone x and above, ipad
    if (height < 812) {
      styling.innerContainerFlex = 1 / 3;
    } else if (height > 811 && height < 1024) {
      styling.innerContainerFlex = 1 / 4;
    } else {
      styling.innerContainerFlex = 1 / 5;
    }
    return styling;
  }

  render() {
    const { obscured, window } = this.state;
    const { width, height } = window;
    const {
      t, visible, generatedPassword, closeModal,
    } = this.props;
    const visibilityIcon = obscured ? 'visibility-off' : 'visibility';
    const dynamicStyles = this.modalStyling(height, width);
    const { innerContainerWidth, innerContainerFlex, passwordContainerWidth } = dynamicStyles;

    return (
      <View
        style={styles.container}
      >
        <Modal
          animationType="fade"
          transparent
          visible={visible}
          onRequestClose={closeModal}
          supportedOrientations={['portrait']}
        >
          <View style={[styles.container, styles.modalBackground]}>
            <View style={
              [
                styles.innerContainer, { width: innerContainerWidth, flex: innerContainerFlex },
              ]
           }>
              <View style={styles.messagesContainer}>
                <View>
                  <Text style={styles.title}>{t('completedStatus')}</Text>
                  <Text style={[styles.paragraph]}>
                    {t('completedClipboard')}
                  </Text>
                </View>
              </View>
              <View style={[styles.passwordContainer, { width: passwordContainerWidth }]}>
                <TextInput
                  secureTextEntry={obscured}
                  editable={!obscured}
                  style={styles.password}
                  selectTextOnFocus={!obscured}
                  value={generatedPassword}
                />
                <IconButton
                  icon={visibilityIcon}
                  color={colors.secondary}
                  onPress={this.toggleObscured}
                  style={styles.hideShowButton}
                />
              </View>
              <View style={styles.buttonRow}>
                <Button
                  testID="start-over-button"
                  onPress={this.handleSubmit}
                  accessibilityLabel="Press to start over"
                  mode="text"
                  contentStyle={{ width: 'auto' }}
                  theme={{ colors: { text: colors.secondary }, fonts: { regular: 'lato-bold' } }}
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
