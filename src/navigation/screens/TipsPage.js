import React from 'react';
import { withNamespaces } from 'react-i18next';
import {
  ScrollView, StyleSheet, View,
} from 'react-native';
import { List, Text, Card } from 'react-native-paper';
import { colors } from '../../styles/base';

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: colors.background,
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: '7%',
    marginBottom: '10%',
  },
  outerCard: {
    borderTopColor: colors.borderColor,
    borderTopWidth: 1,
    backgroundColor: 'white',
    marginTop: 3,
  },
  accordionWrapper: {
    backgroundColor: 'white',
    borderColor: colors.borderColor,
    borderRadius: 3,
    marginTop: 0.5,
  },
  cardContent: {
    color: colors.secondary,
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
        theme={{ colors: { text: colors.secondary } }}
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
      <View style={styles.backgroundContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>{t('title')}</Text>
          <View>
            { components }
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default withNamespaces('tipsPage')(TipsPage);
export { TipsPage as TestTipsPage };
