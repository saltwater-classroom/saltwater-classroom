import React, { Component } from 'react';
import { View } from 'native-base';
import PropTypes from 'prop-types';

import FormBuilder from './FormGenerator/formBuilder/index';
import { StyledButton } from './Buttons';
import StyledText from './Typography';

const styles = {
  wrapper: {
    flex: 1
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flex: 1,
    alignItems: 'center'
  },
  warningMessage: {
    textAlign: 'center',
    alignItems: 'center'
  }
};

export default class FormGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWarningMessage: false
    };
  }

  isFormSubmitable(fields, responses) {
    for (let i = 0; i < fields.length; i += 1) {
      const currField = fields[0];
      const currResponse = responses[currField.name];
      if (currField.required && currResponse === '') {
        return false;
      }
    }
    return true;
  }

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
        {this.state.isWarningMessage && (
          <StyledText
            textType="body"
            text="You are missing some required fields"
            fontColor="coralReef"
            style={styles.warningMessage}
          />
        )}
        <View style={styles.submitButton}>
          <StyledButton
            style={{ width: 200 }}
            onPress={() => {
              const isFormSubmitable = this.isFormSubmitable(
                fields,
                this.formGenerator.getValues()
              );
              if (isFormSubmitable) {
                this.props.onSubmit(this.formGenerator.getValues());
              } else {
                this.setState({ isWarningMessage: true });
              }
            }}
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
