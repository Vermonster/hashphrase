import React from 'react';
import { withNamespaces } from 'react-i18next';
import {
  ScrollView, StyleSheet, View, Dimensions, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { List, Text, Card, Divider } from 'react-native-paper';
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
  },
});

class TipsPage extends React.Component {
  static navigationOptions = {
    headerStyle: {
      elevation: 0,
      backgroundColor: colors.primary,
      shadowOpacity: 0.8,
      borderBottomWidth: 0,
      shadowColor: colors.tipsPageBorder,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
    },
    headerTintColor: colors.secondary,
  };

  state = {
    height: Dimensions.get('window').height,
  }

  onLayout = () => {
    const { height } = Dimensions.get('screen');
    this.setState({ height });
  }

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
    const { height } = this.state;
    const questionObj = t('questions', { returnObjects: true });
    const questionArr = Object.keys(questionObj);
    const components = this.questionMap(questionArr, questionObj);
    const titleVerticalMargins = 0.07 * (height);

    return (
      <SafeAreaView style={styles.backgroundContainer} onLayout={this.onLayout}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={[styles.title, { marginVertical: titleVerticalMargins }]}>{t('title')}</Text>
          <View>
            { components }
          </View>
        </ScrollView>
        <View style={{
          flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '8%',
        }}
        >
          <View style={{ borderRightWidth: 1, marginRight: '2%' }}>
            <Text style={{ marginRight: '2%' }}>Version 1.0.0</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default withNamespaces('tipsPage')(TipsPage);
export { TipsPage as TestTipsPage };
