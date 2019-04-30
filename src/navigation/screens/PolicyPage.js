import React from 'react';
import {
  ScrollView, SafeAreaView, View,
} from 'react-native';
import { withNamespaces } from 'react-i18next';
import {
  Subheading, Paragraph, Title,
} from 'react-native-paper';

const PolicyPage = ({ t }) => {
  const privacyPolicy = t('privacy_policy', { returnObjects: true });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: '10%' }}>
        <Title style={{ fontFamily: 'lato-bold' }}>
          {t('title')}
        </Title>
        <Paragraph>
          {t('update')}
          {'\n'}
        </Paragraph>
        <Paragraph>
          {t('creator')}
          {'\n'}
        </Paragraph>
        { privacyPolicy.map(item => (
          <View key={item.id}>
            <Subheading style={{ fontFamily: 'lato-bold' }}>{item.subheading}</Subheading>
            <Paragraph style={{ lineHeight: 24}}>
              {item.content}
              {'\n'}
            </Paragraph>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default withNamespaces('policyPage')(PolicyPage);
