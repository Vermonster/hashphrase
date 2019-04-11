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
  title: {
    fontSize: 24,
    color: colors.secondary,
    textAlign: 'center',
    marginTop: '7%',
    marginBottom: '10%',
  },
  outerCard: {
    backgroundColor: 'white',
    shadowOpacity: 0,
    elevation: 0,
    marginTop: -8,
  },
  accordionWrapper: {
    backgroundColor: 'white',
    borderColor: colors.tipsPageBorder,
    borderWidth: 0.5,
    paddingHorizontal: 10,
  },
  cardContent: {
    color: colors.secondary,
    fontSize: 16,
    lineHeight: 21,
  },
  scrollContainer: {
    flexGrow: 1,
    borderColor: colors.tipsPageBorder,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

class TipsPage extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 1,
      borderBottomWidth: 0,
      borderBottomColor: colors.primary,
      shadowOpacity: 0.8,
      shadowColor: colors.tipsPageBorder,
      shadowRadius: 1,
      shadowOffset: { width: 0, height: 3 },
    },
    headerTintColor: colors.secondary,
    cardStyle: { elevation: 10 },
    elevation: 1,
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
