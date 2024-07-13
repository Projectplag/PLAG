import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CHECK_TITLE_FIELD } from "../check/CheckTitle";

export const SimilarityReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="matchPercentage" source="matchPercentage" />
        <TextField label="matchSnippet" source="matchSnippet" />
        <ReferenceField label="check" source="check.id" reference="Check">
          <TextField source={CHECK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="matchedDocument" source="matchedDocument" />
      </SimpleShowLayout>
    </Show>
  );
};
