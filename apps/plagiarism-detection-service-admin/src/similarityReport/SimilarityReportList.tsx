import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHECK_TITLE_FIELD } from "../check/CheckTitle";

export const SimilarityReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SimilarityReports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="matchPercentage" source="matchPercentage" />
        <TextField label="matchSnippet" source="matchSnippet" />
        <ReferenceField label="check" source="check.id" reference="Check">
          <TextField source={CHECK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="matchedDocument" source="matchedDocument" />
      </Datagrid>
    </List>
  );
};
