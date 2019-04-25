import React from 'react';
import {
  ScrollView, SafeAreaView, View, Text,
} from 'react-native';
import { withNamespaces } from 'react-i18next';
import {
  Subheading, Paragraph, Title,
} from 'react-native-paper';

const PolicyPage = ({ t }) => {
  const privacyPolicy = t('privacy_policy', { returnObjects: true });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: '5%' }}>
        <Title>
          {t('title')}
          {'\n'}
        </Title>
        <Text>
          {t('update')}
          {'\n'}
        </Text>
        <Paragraph>
          {t('creator')}
          {'\n'}
        </Paragraph>
        { privacyPolicy.map(item => (
          <View key={item.id}>
            <Subheading>{item.subheading}</Subheading>
            <Paragraph>
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
