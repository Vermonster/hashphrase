import React from 'react';
import { withNamespaces } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, Text, Card } from 'react-native-paper';
import { colors } from '../../styles/base';

const styles = StyleSheet.create({
  scrollContainer: {
    height: '90%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '10%',
    backgroundColor: colors.borderColor,
  },
  cardContent: {
    color: colors.darkGray,
    fontSize: 16,
  },
});

class TipsPage extends React.Component {
  questionMap = (questions, questionObject) => questions.map(question => (
    <View
      key={question}
      style={{
        backgroundColor: 'white',
        borderColor: colors.borderColor,
        borderRadius: 3,
        borderWidth: 1,
        marginTop: 3,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0.02,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
      }}
    >
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
      >
        <Card style={{ borderTopColor: colors.borderColor, borderTopWidth: 2, backgroundColor: 'white' }}>
          <Card.Content>
            <Text style={styles.cardContent}>
              {questionObject[question].content}
            </Text>
          </Card.Content>
        </Card>
      </List.Accordion>
    </View>
  ));

  render() {
    const { t } = this.props;
    const questionObj = t('questions', { returnObjects: true });
    const questionArr = Object.keys(questionObj);
    const components = this.questionMap(questionArr, questionObj);

    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          { components }
        </View>
      </ScrollView>
    );
  }
}

export default withNamespaces('tipsPage')(TipsPage);
export { TipsPage as TestTipsPage };
