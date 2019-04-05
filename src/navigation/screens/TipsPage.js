import React from 'react';
import { withNamespaces } from 'react-i18next';
import { ScrollView, StyleSheet } from 'react-native';
import BaseAccordion from '../../components/BaseAccordion';

const styles = StyleSheet.create({
  scrollContainer: {
    height: 200,
  },
});

class TipsPage extends React.Component {
  questionMap = (questions, questionObject) => questions.map(question => (
    <BaseAccordion
      title={questionObject[question].title}
      contents={questionObject[question].content}
      key={question}
    />
  ));

  render() {
    const { t } = this.props;
    const questionObj = t('questions', { returnObjects: true });
    const questionArr = Object.keys(questionObj);
    const components = this.questionMap(questionArr, questionObj);

    return (
      <ScrollView style={styles.scrollContainer}>
        { components }
      </ScrollView>
    );
  }
}

export default withNamespaces('tipsPage')(TipsPage);
export { TipsPage as TestTipsPage };
