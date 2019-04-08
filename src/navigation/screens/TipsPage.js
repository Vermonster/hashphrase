import React from 'react';
import { withNamespaces } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, Text, Card } from 'react-native-paper';
import { colors } from '../../styles/base';

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.borderColor,
    flex: 1,
  },
  scrollContainer: {
    height: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '10%',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: '5%',
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
      style={{
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
        <Card style={{
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
        }}
        >
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
      // <View style={styles.outerContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>{t('title')}</Text>
          <View>
            { components }
          </View>
        </ScrollView>
      // </View>
    );
  }
}

export default withNamespaces('tipsPage')(TipsPage);
export { TipsPage as TestTipsPage };
