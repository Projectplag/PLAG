import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CheckTitle } from "../check/CheckTitle";

export const SimilarityReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="matchPercentage" source="matchPercentage" />
        <TextInput label="matchSnippet" multiline source="matchSnippet" />
        <ReferenceInput source="check.id" reference="Check" label="check">
          <SelectInput optionText={CheckTitle} />
        </ReferenceInput>
        <TextInput label="matchedDocument" source="matchedDocument" />
      </SimpleForm>
    </Edit>
  );
};
