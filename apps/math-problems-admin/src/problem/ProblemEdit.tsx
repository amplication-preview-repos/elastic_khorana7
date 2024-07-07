import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProblemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
