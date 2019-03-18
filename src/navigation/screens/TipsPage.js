import React from 'react';
import { withNamespaces } from 'react-i18next';
import { View } from 'react-native';
import BaseAccordion from '../../components/BaseAccordion';


class InfoScreen extends React.Component {
  questionKeys = Object.keys(en.translations.tipsPage);

  nameSpace = 'tipsPage';

  components = this.questionKeys.map(question => (
    <BaseAccordion
      title={i18n.t(`${this.nameSpace}.${question}.title`)}
      contents={i18n.t(`${this.nameSpace}.${question}.content`)}
      key={question}
    />
  ));

  render() {
    return (
      <View>
        { this.components }
      </View>
    );
  }
}

export default withNamespaces('translations')(InfoScreen);