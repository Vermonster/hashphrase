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
    flexWrap: 'wrap',
  },
  paragraphs: {
    marginBottom: fontSize.md,
    lineHeight: Math.ceil(fontSize.md * 1.5),
  },
  scrollContainer: {
    flexGrow: 1,
    borderColor: colors.tipsPageBorder,
  },
  list: {
    marginLeft: 10,
  },
  innerList: {
    flexDirection: 'row',
  },
  listContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    top: -10,
  },
  bulletColumn: {
    width: 10,
  },
  textColumn: {
    flex: 1,
  },
  bulletStyle: {
    top: 2,
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

  createSimpleParagraph = (content, itemKey) => (
    <Paragraph style={styles.paragraphs} key={content[itemKey]}>
      { content[itemKey] }
    </Paragraph>
  );

  createListItem = (listDetails, itemKey) => (
    <View style={styles.innerList} key={listDetails[itemKey]}>
      <View style={styles.bulletColumn}>
        <Text style={styles.bulletStyle}>
          &#8226;
        </Text>
      </View>
      <View style={styles.textColumn}>
        <Paragraph style={styles.list}>
          { listDetails[itemKey] }
        </Paragraph>
      </View>
    </View>
  );

  createListContainer = (listItems, ind) => (
    <View style={styles.listContainer} key={`list-${ind}`}>
      {listItems}
    </View>
  );

  noResult = () => (
    <Paragraph style={styles.paragraphs} key="no-contents">
      {'There are no questions.'}
    </Paragraph>
  );

  questionMap = (questions, questionObject) => questions.map((question) => {
    const questionGroup = questionObject[question];

    const createInnerFormatting = () => {
      const result = [];
      const content = questionGroup.content ? questionGroup.content : null;
      const listContent = content ? content.listContent : null;

      if (content) {
        Object.keys(content).forEach((key, ind) => {
          if (key !== 'listContent') {
            result.push(this.createSimpleParagraph(content, key));
          } else {
            const listItems = [];
            Object.keys(listContent).forEach((listKey) => {
              listItems.push(this.createListItem(listContent, listKey));
            });
            result.push(this.createListContainer(listItems, ind));
          }
        });
      } else {
        result.push(this.noResult());
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
              { createInnerFormatting() }
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
      <SafeAreaView style={styles.backgroundContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={[styles.title, { marginVertical: titleVerticalMargins }]}>{t('FAQs')}</Text>
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
