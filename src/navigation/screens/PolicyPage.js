import React from 'react';
import { ScrollView, Text } from 'react-native';
import { withNamespaces } from 'react-i18next';
import {
  Subheading, Paragraph, Title,
} from 'react-native-paper';

const PolicyPage = ( { t }) => (
  <ScrollView>
    <Title>{t('title')}</Title>
    <Text>{t('update')}</Text>
    <Paragraph>{t('creator')}</Paragraph>
    <Subheading>{t('subheading_1')}</Subheading>
    <Paragraph>{t('paragraph_1')}</Paragraph>
    <Subheading>{t('subheading_2')}</Subheading>
    <Paragraph>{t('paragraph_2')}</Paragraph>
    <Subheading>{t('subheading_3')}</Subheading>
    <Paragraph>{t('paragraph_3')}</Paragraph>
    <Subheading>{t('subheading_4')}</Subheading>
    <Paragraph>{t('paragraph_4')}</Paragraph>
    <Subheading>{t('subheading_5')}</Subheading>
    <Paragraph>{t('paragraph_5')}</Paragraph>
    <Subheading>{t('subheading_6')}</Subheading>
    <Paragraph>{t('paragraph_6')}</Paragraph>
    <Subheading>{t('subheading_7')}</Subheading>
    <Paragraph>{t('paragraph_7')}</Paragraph>
  </ScrollView>
);

export default withNamespaces('policyPage')(PolicyPage);
