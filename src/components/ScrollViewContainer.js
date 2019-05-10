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
  //   flex: 1,
    flexGrow: 1,
  },
});

const ScrollViewContainer = (props) => {
  const { children } = props;
  const platform = Platform.OS;
  // let scrollContainer;

  // if (platform === 'ios') {
    let scrollContainer = (
      <KeyboardAwareScrollView
        style={styles.flexLayout}
        keyboardShouldPersistTaps="always"
        enableOnAndroid
        enableAutomaticScroll={platform === 'ios'}
        extraHeight={150} //added
        extraScrollHeight={150} //added
      >
        {children}
      </KeyboardAwareScrollView>
    );
  // } else if (platform === 'android') {
  //   scrollContainer = (
  //     <KeyboardAvoidingView
  //       behavior="padding"
  //       keyboardVerticalOffset={100}
  //       style={styles.flexLayout}
  //     >
  //       <ScrollView style={styles.flexLayout} keyboardShouldPersistTaps="always">
  //         {children}
  //       </ScrollView>
  //     </KeyboardAvoidingView>
  //   );
  // }
  return scrollContainer;
};

export default ScrollViewContainer;




// import React from 'react';
// import {
//   StyleSheet,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
// } from 'react-native';

// const styles = StyleSheet.create({
//   flexLayout: {
//     flex: 1,
//   },
// });

// const ScrollViewContainer = (props) => {
//   const { children } = props;
//   const platform = Platform.OS;
//   let scrollContainer;

//   if (platform === 'ios') {
//     scrollContainer = (
//       <KeyboardAvoidingView
//         behavior="padding"
//         keyboardVerticalOffset={100}
//         style={styles.flexLayout}
//       >
//         <ScrollView style={styles.flexLayout} keyboardShouldPersistTaps="always">
//           {children}
//         </ScrollView>
//       </KeyboardAvoidingView>
//     );
//   } else if (platform === 'android') {
//     scrollContainer = (
//       <KeyboardAvoidingView
//         behavior="padding"
//         keyboardVerticalOffset={100}
//         style={styles.flexLayout}
//       >
//         <ScrollView style={styles.flexLayout} keyboardShouldPersistTaps="always">
//           {children}
//         </ScrollView>
//       </KeyboardAvoidingView>
//     );
//   }
//   return scrollContainer;
// };

// export default ScrollViewContainer;

