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
      <StyledText textType="head" text="head" fontColor="darkCyan" />
      <StyledText textType="subHead" text="subHead" fontColor="greyCyan" />
      <StyledText textType="subHead2" text="subhead2" fontColor="lightOrange" />
      <StyledText textType="subHead3" text="subHead3" fontColor="mediumOrange" />
      <StyledText textType="body" text="body" fontColor="darkOrange" />

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
