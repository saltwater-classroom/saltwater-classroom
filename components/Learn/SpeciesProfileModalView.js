import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ScrollView, StyleSheet, Image } from 'react-native';
import * as Actions from '../../app/actions/Learn/learn';

import StyledText from '../shared_components/Typography';

export class SpeciesProfileModalView extends React.Component {
  componentDidMount() {
    this.props.getSpeciesProfileFromId(this.props.speciesProfileId);
  }

  render() {
    const { currentSpeciesProfile } = this.props;
    if (currentSpeciesProfile) {
      const {
        image_url,
        created_by,
        fun_fact,
        phsyical_description,
        scientific_name,
        size,
        species_name
      } = currentSpeciesProfile;
      return (
        <ScrollView style={styles.item}>
          <Image style={styles.photo} source={{ uri: image_url }} />
          <StyledText
            textType="head"
            text={species_name}
            fontColor="tidepool"
            style={styles.header}
          />

          <StyledText
            textType="bodyBold"
            text="Created By"
            fontColor="oceanFloor"
            style={styles.subHeadSpacing}
          />
          <StyledText
            textType="body"
            text={created_by}
            fontColor="tidepool"
            style={styles.spacing}
          />

          <StyledText
            textType="bodyBold"
            text="Scientific Name"
            fontColor="oceanFloor"
            style={styles.subHeadSpacing}
          />
          <StyledText
            textType="body"
            text={scientific_name}
            fontColor="tidepool"
            style={styles.spacing}
          />

          <StyledText
            textType="bodyBold"
            text="Physical Description"
            fontColor="oceanFloor"
            style={styles.subHeadSpacing}
          />
          <StyledText
            textType="body"
            text={phsyical_description}
            fontColor="tidepool"
            style={styles.spacing}
          />

          <StyledText
            textType="bodyBold"
            text="Size"
            fontColor="oceanFloor"
            style={styles.subHeadSpacing}
          />
          <StyledText textType="body" text={size} fontColor="tidepool" style={styles.spacing} />

          <StyledText
            textType="bodyBold"
            text="Fun Fact"
            fontColor="oceanFloor"
            style={styles.subHeadSpacing}
          />
          <StyledText textType="body" text={fun_fact} fontColor="tidepool" style={styles.spacing} />
        </ScrollView>
      );
    }
    return <ScrollView style={styles.item} />;
  }
}
// Object {
//   "created_by": "Ryan H.",
//   "fun_fact": "They continously replace their teeth throughout their lives, with old ones falling out and new ones coming in.",
//   "id": "1",
//   "image_url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/FL_fig04.jpg",
//   "phsyical_description": "Manatees are large, full aquatic, mammals sometimes known as sea cows.",
//   "scientific_name": "Trichechus",
//   "size": "Up to 13.1 feet long",
//   "species_name": "Manatee",
// }

SpeciesProfileModalView.propTypes = {
  speciesProfileId: PropTypes.string.isRequired,
  currentSpeciesProfile: PropTypes.object.isRequired,
  getSpeciesProfileFromId: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 30
  },
  header: {
    paddingLeft: 20,
    marginTop: 15
  },
  photo: {
    width: 'auto',
    height: 250
  },
  subHeadSpacing: {
    paddingLeft: 20
  },
  spacing: {
    marginBottom: 29,
    paddingLeft: 20
  }
});

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state, props) {
  return {
    loading: state.learnScreen.loading,
    currentSpeciesProfile: state.learnScreen.currentSpeciesProfile
  };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions
// file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

// Connect everything
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeciesProfileModalView);
