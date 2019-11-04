import React, { Component } from 'react';
import { View } from 'native-base';
import PropTypes from 'prop-types';

import FormBuilder from './FormGenerator/formBuilder/index';
import { StyledButton } from './Buttons';

const styles = {
  wrapper: {
    flex: 1
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flex: 1,
    alignItems: 'center'
  }
};

export default class FormGenerator extends Component {
  render() {
    const { fields } = this.props;
    return (
      <View style={styles.wrapper}>
        <View>
          <FormBuilder
            ref={c => {
              this.formGenerator = c;
            }}
            fields={fields}
          />
        </View>
        <View style={styles.submitButton}>
          <StyledButton
            style={{ width: 200 }}
            onPress={() => this.props.onSubmit()}
            text="submit"
          />
        </View>
      </View>
    );
  }
}

FormGenerator.defaultProps = {
  fields: [],
  onSubmit: undefined
};

FormGenerator.propTypes = {
  fields: PropTypes.array,
  onSubmit: PropTypes.func
};
