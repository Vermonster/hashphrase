import React from 'react';
import { withNamespaces } from 'react-i18next';
import {
  ScrollView, StyleSheet, View, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {
  List,
  Text,
  Card,
  Paragraph,
} from 'react-native-paper';
import Footer from '../../components/Footer';
import { colors, fontSize } from '../../styles/base';

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: colors.background,
    height: '100%',
  },
  title: {
    fontSize: 24,
    color: colors.secondary,
    textAlign: 'center',
    fontFamily: 'lato-bold',
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
  questionTitles: {
    color: colors.secondary,
    fontSize: fontSize.lg,
    lineHeight: Math.ceil(fontSize.lg * 1.5),
  },
  paragraphs: {
    marginBottom: fontSize.md,
    lineHeight: Math.ceil(fontSize.md * 1.5),
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

  questionMap = (questions, questionObject) => questions.map((question) => {
    const contents = questionObject[question].content;

    const createParagraph = () => {
      const result = [];
      if (contents) {
        Object.keys(contents).forEach((key) => {
          result.push(
            <Paragraph style={styles.paragraphs} key={contents[key]}>
              { contents[key] }
            </Paragraph>,
          );
        });
      } else {
        result.push(
          <Paragraph style={styles.paragraphs} key="no-contents">
            {'There are no questions.'}
          </Paragraph>,
        );
      }
      return result;
    };

    return (
      <View
        key={question}
        style={styles.accordionWrapper}
      >
        <List.Accordion
          theme={{ colors: { text: colors.secondary } }}
          title={<Text style={styles.questionTitles}>{questionObject[question].title}</Text>}
        >
          <Card style={styles.outerCard}>
            <Card.Content>
              { createParagraph() }
            </Card.Content>
          </Card>
        </List.Accordion>
      </View>
    );
  });

  render() {
    const { t, navigation } = this.props;
    const { height } = this.state;
    const questionObj = t('questions', { returnObjects: true });
    const questionArr = Object.keys(questionObj);
    const components = (questionArr.length > 0) ? this.questionMap(questionArr, questionObj) : null;
    const titleVerticalMargins = 0.07 * (height);

    return (
      <SafeAreaView style={styles.backgroundContainer} onLayout={this.onLayout}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={[styles.title, { marginVertical: titleVerticalMargins }]}>{t('title')}</Text>
          <View>
            { components }
          </View>
        </ScrollView>
        <Footer
          navigation={navigation}
        />
      </SafeAreaView>
    );
  }
}

export default withNamespaces('tipsPage')(TipsPage);
export { TipsPage as TestTipsPage };
