import React from 'react';
import { withNamespaces } from 'react-i18next';
import { View, Text } from 'react-native';
import BaseAccordion from '../../components/BaseAccordion';

class InfoScreen extends React.Component {
  questionMap = (questions, translateFn) => questions.map(question => (
    <BaseAccordion
      title={translateFn({ question }.title)}
      contents={translateFn({ question }.content)}
      key={question}
    />
  ));

  render() {
    const { t } = this.props;
    const questionObj = t('questions', { returnObjects: true });
    const questionArr = Object.keys(questionObj);
    const test = questionArr.length;
    const components = this.questionMap(questionArr, t);

    return (
      <View>
        {/* <Text>{ test[0] }</Text> */}
        <Text>{test}</Text>
        {/* { components } */}
      </View>
    );
  }
}

export default withNamespaces('tipsPage')(InfoScreen);
