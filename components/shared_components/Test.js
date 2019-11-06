import React from 'react';
import { ScrollView } from 'react-native';

import StyledText from './Typography';
import { StyledButton } from './Buttons';
import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';
import Tag from './Tags';
import ProfileIcon from './ProfileIcon';

export default function TestScreen() {
  return (
    <ScrollView>
      <StyledText textType="head" text="head" fontColor="tidepool" />
      <StyledText textType="subHead" text="subHead" fontColor="smoothSailing" />
      <StyledText textType="subHead2" text="subhead2" fontColor="goldStar" />
      <StyledText textType="subHead3" text="subHead3" fontColor="pencil" />
      <StyledText textType="body" text="body" fontColor="coralReef" />

      <TextInput placeHolderText="write something" />

      <TextAreaInput placeHolderText="write something" rowNumber={3} />
      <Tag text="tag1" />
      <Tag text="tag2" outline={false} />
      <ProfileIcon icon="bear" />

      <StyledButton style={{ width: 200 }} text="hi" />
    </ScrollView>
  );
}

TestScreen.navigationOptions = {
  title: 'Links'
};
