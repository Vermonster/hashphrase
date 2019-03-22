import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

// const styles = StyleSheet.create({
//   inputContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   inputComponent: {
//     flex: 1,
//   },
//   inputLabel: {
//     // width: '100%',
//   },
// });

class FormInput extends React.Component {
  state = { visible: false };

  toggleVisibility = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  isTextHidden = (inputLabel, visibleStatus) => {
    if (inputLabel === 'label') {
      return false;
    } if (inputLabel === 'password') {
      if (visibleStatus) {
        return false;
      }
    }
    return true;
  }

  render() {
    const {
      name, placeholder, onChanged, formLabel,
    } = this.props;
    const { visible } = this.state;
    const visibilityIcon = visible ? 'visibility' : 'visibility-off';
    const visibleText = this.isTextHidden(name, visible);
    const buttonType = (name === 'password') ? (
      <Button
        icon={visibilityIcon}
        onPress={this.toggleVisibility}
        // style={styles.visibilityIcon}
      />
    ) : null;

    return (
      <View 
        // style={styles.inputContainer}
      >
        <Text
          // style={styles.inputLabel}
        >
          {formLabel}
        </Text>
        <TextInput
          className="input-field"
          name={name}
          placeholder={placeholder}
          onChange={onChanged}
          // style={styles.inputComponent}
          secureTextEntry={visibleText}
        />
        { buttonType }
      </View>
    );
  }
}


FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
