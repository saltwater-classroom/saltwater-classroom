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
      <StyledText textType="head" text="head" fontColor="mediumOrange" />
      <StyledText textType="subHead" text="subHead" />
      <StyledText textType="subHead2" text="subhead2" />
      <StyledText textType="subHead3" text="subHead3" />
      <StyledText textType="body" text="body" />

      <TextInput placeHolderText="write something" />

      <TextAreaInput placeHolderText="write something" />
      <Tag placeHolderText="write something" />
      <ProfileIcon icon="bear" />

      <StyledButton style={{ width: 200 }} text="hi" />
    </ScrollView>
  );
}

TestScreen.navigationOptions = {
  title: 'Links'
};
