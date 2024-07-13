import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CheckTitle } from "../check/CheckTitle";

export const SimilarityReportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="matchPercentage" source="matchPercentage" />
        <TextInput label="matchSnippet" multiline source="matchSnippet" />
        <ReferenceInput source="check.id" reference="Check" label="check">
          <SelectInput optionText={CheckTitle} />
        </ReferenceInput>
        <TextInput label="matchedDocument" source="matchedDocument" />
      </SimpleForm>
    </Create>
  );
};
