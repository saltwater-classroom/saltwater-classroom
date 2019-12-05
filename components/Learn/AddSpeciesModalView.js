import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';

import FormGenerator from '../shared_components/FormGenerator';

import StyledText from '../shared_components/Typography';

const fields = [
  {
    type: 'text',
    name: 'image_url',
    required: true,
    label: 'Link to an image of species'
  },
  {
    type: 'text',
    name: 'species_name',
    required: true,
    label: 'Species Name'
  },
  {
    type: 'text',
    name: 'scientific_name',
    required: true,
    label: 'Scientific Name'
  },
  {
    type: 'text',
    name: 'physical_description',
    required: true,
    label: 'Physical Description'
  },
  {
    type: 'text',
    name: 'size',
    required: true,
    label: 'Size'
  },
  {
    type: 'text',
    name: 'fun_fact',
    required: true,
    label: 'Fun Fact'
  }
];

export default class AddSpeciesModalView extends React.Component {
  render() {
    return (
      <ScrollView style={styles.item}>
        <StyledText
          textType="subHead3"
          text="Add a Species Profile"
          fontColor="tidepool"
          style={styles.spacing}
        />
        <StyledText
          textType="body"
          text="Research a marine species and fill in each section!"
          fontColor="coralReef"
          style={styles.spacing}
        />

        <FormGenerator fields={fields} onSubmit={this.props.openNextModal} />
      </ScrollView>
    );
  }
}

AddSpeciesModalView.defaultProps = {
  openNextModal: undefined
};

AddSpeciesModalView.propTypes = {
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
    paddingLeft: 20,
    paddingRight: 20
  }
});
