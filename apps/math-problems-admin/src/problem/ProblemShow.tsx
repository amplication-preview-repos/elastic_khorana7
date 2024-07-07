import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProblemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="difficulty" source="difficulty" />
        <TextField label="likes" source="likes" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="dislikes" source="dislikes" />
      </SimpleShowLayout>
    </Show>
  );
};
