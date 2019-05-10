import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  flexLayout: {
    flexGrow: 1,
  },
});

const ScrollViewContainer = (props) => {
  const { children } = props;
  const platform = Platform.OS;
  let scrollContainer;

  if (platform === 'ios') {
    scrollContainer = (
      <KeyboardAwareScrollView
        style={styles.flexLayout}
        keyboardShouldPersistTaps="always"
      >
        {children}
      </KeyboardAwareScrollView>
    );
  } else if (platform === 'android') {
    scrollContainer = (
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        style={styles.flexLayout}
        behavior="padding"
      >
        <ScrollView style={styles.flexLayout} keyboardShouldPersistTaps="always">
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  return scrollContainer;
};

export default ScrollViewContainer;
