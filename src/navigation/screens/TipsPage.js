import React from 'react';
import { withNamespaces } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, Text, Card } from 'react-native-paper';
import { colors } from '../../styles/base';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    marginHorizontal: '5%',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: '10%',
  },
  outerCard: {
    borderTopColor: colors.borderColor,
    borderTopWidth: 1,
    backgroundColor: 'white',
    marginTop: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.8,
    elevation: 3,
  },
  accordionWrapper: {
    backgroundColor: 'white',
    borderColor: colors.borderColor,
    borderRadius: 3,
    borderWidth: 1,
    marginTop: 1,
    marginBottom: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.02,
      height: 0.5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  cardContent: {
    color: colors.darkGray,
    fontSize: 16,
  },
});

class TipsPage extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.secondary,
  };

  questionMap = (questions, questionObject) => questions.map(question => (
    <View
      key={question}
      style={styles.accordionWrapper}
    >
      <List.Accordion
        theme={{ colors: { text: colors.primary } }}
        title={<Text style={styles.cardContent}>{questionObject[question].title}</Text>}
      >
        <Card style={styles.outerCard}>
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
        <Text style={styles.title}>{t('title')}</Text>
        <View>
          { components }
        </View>
      </ScrollView>
    );
  }
}

export default withNamespaces('tipsPage')(TipsPage);
export { TipsPage as TestTipsPage };
