import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';

import FormGenerator from '../shared_components/FormGenerator';

import StyledText from '../shared_components/Typography';

export default class DoMissionModalView extends React.Component {
  render() {
    const { name, description, fields } = this.props;
    return (
      <ScrollView style={styles.item}>
        <StyledText textType="subHead3" text={name} fontColor="tidepool" style={styles.spacing} />
        <StyledText
          textType="body"
          text={description}
          fontColor="coralReef"
          style={styles.spacing}
        />

        <FormGenerator fields={fields} onSubmit={this.props.openNextModal} />
      </ScrollView>
    );
  }
}

DoMissionModalView.defaultProps = {
  openNextModal: undefined
};

DoMissionModalView.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  openNextModal: PropTypes.func
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 30
  },
  spacing: {
    marginBottom: 29,
    paddingLeft: 20
  }
});
