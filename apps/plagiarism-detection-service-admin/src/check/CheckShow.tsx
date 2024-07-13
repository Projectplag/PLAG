import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHECK_TITLE_FIELD } from "./CheckTitle";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const CheckShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="document"
          source="document.id"
          reference="Document"
        >
          <TextField source={DOCUMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="checkedBy" source="checkedBy" />
        <TextField label="checkDate" source="checkDate" />
        <TextField label="similarityScore" source="similarityScore" />
        <TextField label="report" source="report" />
        <ReferenceManyField
          reference="SimilarityReport"
          target="checkId"
          label="SimilarityReports"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
