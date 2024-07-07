import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProblemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Problems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="difficulty" source="difficulty" />
        <TextField label="likes" source="likes" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="dislikes" source="dislikes" />
      </Datagrid>
    </List>
  );
};
