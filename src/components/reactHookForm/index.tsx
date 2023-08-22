import { Button, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Input } from "@chakra-ui/react";
import { useForm, useFieldArray } from "react-hook-form";

const indianPhoneNumberRegex = /^[789]\d{9}$/;

type FormValues = {
  username: string;
  email: string;
  channel: string;
  phNumbers: {
    number: string;
  }[];
};

const Wrapper = styled.div`
  margin-top: 50px;
`;
const InputContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  width: 100%;
  justify-content: end;
`;

const ErrorText = styled.div`
  color: red;
`;

const ReactHookForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      phNumbers: [{ number: "" }],
    },
  });
  const { register, handleSubmit, formState, control } = form; // extract handleSubmit from form
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted with data = ", data);
  };

  return (
    <Wrapper>
      <Heading my="4">React Hook Form handling</Heading>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="username">Username</label>
          <Input
            id="username"
            isInvalid={!!errors?.username}
            type="text"
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors?.username && (
            <ErrorText className="error">{errors?.username?.message}</ErrorText>
          )}
        </div>

        <div>
          <label htmlFor="channel">Channel</label>
          <Input
            id="channel"
            isInvalid={!!errors?.channel}
            type="text"
            {...register("channel", {
              required: "Channel is required",
            })}
          />
          {errors?.channel && (
            <ErrorText className="error">{errors?.channel?.message}</ErrorText>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            isInvalid={!!errors?.email}
            type="text"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@example.com" ||
                    "Enter a different email"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "This domain is not supported"
                  );
                },
              },
            })}
          />
          {errors?.email && (
            <ErrorText className="error">{errors?.email?.message}</ErrorText>
          )}
        </div>

        <div style={{ fontWeight: 700 }}>List of phone numbers</div>
        <div>
          {fields?.map((field, index) => {
            return (
              <div key={field.id}>
                <InputContainer>
                  <Input
                    style={{ width: "100%" }}
                    {...register(`phNumbers.${index}.number` as const, {
                      required: "Phone number cannot be empty",
                      validate: 
                    })}
                    type="text"
                  />
                  {index > 0 && (
                    <Button type="button" onClick={() => remove(index)}>
                      Remove
                    </Button>
                  )}
                </InputContainer>
              </div>
            );
          })}
        </div>
        <Button
          style={{ width: "100%", marginBottom: "10px" }}
          type="button"
          onClick={() => append({ number: "" })}
        >
          Add Member
        </Button>

        <Button style={{ width: "100%" }} type="submit">
          Submit
        </Button>
      </form>
    </Wrapper>
  );
};

export default ReactHookForm;
