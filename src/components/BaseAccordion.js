import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Card, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const BaseAccordion = (props) => {
  const { title, contents } = props;
  return (
    <View style={styles.container}>
      <List.Accordion title={title}>
        <Card>
          <Card.Content>
            <Paragraph>
              {contents}
            </Paragraph>
          </Card.Content>
        </Card>
      </List.Accordion>
    </View>
  );
};

export default BaseAccordion;
