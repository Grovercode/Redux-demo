import { Button, Heading, Input } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { connect } from "react-redux";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";

const InputContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  width: 100%;
  justify-content: end;
`;

class MyForm extends React.Component {
  componentDidMount() {
    const { initialize } = this.props;
    initialize({
      members: [""], // Initialize with an empty member
    });
  }

  renderField = (field: any) => (
    <Input
      style={{ width: "100%" }}
      isInvalid={field.meta.error}
      {...field.input}
      type="text"
    />
  );

  renderMembers = ({ fields }: any) => {
    return (
      <div>
        {fields.map((member: any, index: any) => (
          
            <InputContainer  key={index}>
              <Field name={member} component={this.renderField} />
              <Button type="button" onClick={() => fields.remove(index)}>
                Remove
              </Button>
            </InputContainer>
          
        ))}

        <Button
          style={{ width: "100%", marginBottom: "10px" }}
          type="button"
          onClick={() => fields.push()}
        >
          Add Member
        </Button>
      </div>
    );
  };

  render() {
    console.log(this.props.currentState);
    const { handleSubmit, members } = this.props;
    console.log("members = ", members);
    return (
      <>
        <Heading my="4">Multiple entry Form</Heading>
        <form onSubmit={handleSubmit}>
          {/* Other fields */}
          <FieldArray name="members" component={this.renderMembers} />

          <Button style={{ width: "100%" }} type="submit">
            Submit
          </Button>
        </form>
        <div>Number of entries: {members && members.length}</div>
      </>
    );
  }
}

MyForm = reduxForm({ form: "FieldArraySample" })(MyForm);

const selector = formValueSelector("FieldArraySample");

const mapStateToProps = (state: any) => {
  const members = selector(state, "members");
  return {
    currentState: state,
    members,
  };
};

export default connect(mapStateToProps)(MyForm);
