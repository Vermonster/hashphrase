import React from 'react';
import { withNamespaces } from 'react-i18next';
import { ScrollView, StyleSheet } from 'react-native';
import { List, Text, Card } from 'react-native-paper';
import { colors } from '../../styles/base';

const styles = StyleSheet.create({
  scrollContainer: {
    height: 200,
  },
  cardContent: {
    color: colors.darkGray,
  },
});

class TipsPage extends React.Component {
  questionMap = (questions, questionObject) => questions.map(question => (
    <List.Accordion
      theme={
        {
          colors:
          {
            text: colors.primary,
          },
        }
      }
      title={<Text style={{ color: colors.darkGray }}>{questionObject[question].title}</Text>}
      key={question}
    >
      <Card>
        <Card.Content>
          <Text style={styles.cardContent}>
            {questionObject[question].content}
          </Text>
        </Card.Content>
      </Card>
    </List.Accordion>
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
