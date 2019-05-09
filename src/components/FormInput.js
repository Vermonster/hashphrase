import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text, TextInput } from 'react-native-paper';
import { colors, fontSize } from '../styles/base';

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    fontSize: fontSize.lg,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.white,
  },
  formInputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
  },
  visibilityButton: {
    position: 'absolute',
    alignSelf: 'center',
    right: -2,
  },
});

const FormInput = (props) => {
  const {
    prompt,
    value,
    handleChange,
    label,
    componentType,
    error,
    handleNextInputFocus,
    inputRef,
    handleInputVisibility,
    visibility,
    blurOnSubmit,
  } = props;
  const visibilityIcon = visibility ? 'visibility' : 'visibility-off';
  const buttonType = (componentType !== 'confirmPassword')
    ? (
      <IconButton
        icon={visibilityIcon}
        onPress={handleInputVisibility}
        accessibilityLabel="hide or show password"
        style={styles.visibilityButton}
        color={colors.secondary}
        testID="hideShowButton"
      />
    ) : null;

  const inputMarginBottom = componentType === 'label' ? 30 : 0;
  const inputMarginTop = componentType === 'confirmPassword' ? 10 : 0;

  return (
    <View>
      { prompt && <Text style={styles.label}>{prompt}</Text> }
      <View
        style={
          [
            styles.formInputContainer,
            { marginBottom: inputMarginBottom, marginTop: inputMarginTop },
          ]
        }
      >
        <TextInput
          value={value}
          secureTextEntry={!visibility}
          style={styles.textInput}
          onChange={handleChange(componentType)}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          label={label}
          error={error}
          returnKeyType="next"
          onSubmitEditing={handleNextInputFocus}
          ref={inputRef}
          disableFullscreenUI
          blurOnSubmit={blurOnSubmit}
        />
        { buttonType }
      </View>
    </View>
  );
};

export default FormInput;
