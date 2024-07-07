import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProblemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="difficulty"
          label="difficulty"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="likes" source="likes" />
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="dislikes" source="dislikes" />
      </SimpleForm>
    </Create>
  );
};
