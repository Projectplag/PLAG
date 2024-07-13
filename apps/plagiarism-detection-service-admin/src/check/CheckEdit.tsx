import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";
import { SimilarityReportTitle } from "../similarityReport/SimilarityReportTitle";

export const CheckEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
        <TextInput label="checkedBy" source="checkedBy" />
        <DateTimeInput label="checkDate" source="checkDate" />
        <NumberInput label="similarityScore" source="similarityScore" />
        <div />
        <ReferenceArrayInput
          source="similarityReports"
          reference="SimilarityReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SimilarityReportTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
