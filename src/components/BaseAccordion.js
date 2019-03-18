import React from 'react';
import { View } from 'react-native';
import { List, Card, Paragraph } from 'react-native-paper';

const BaseAccordion = (props) => {
  const { title, contents } = props;
  return (
    <View>
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
