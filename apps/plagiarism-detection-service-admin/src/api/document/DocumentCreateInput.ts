import { CheckCreateNestedManyWithoutDocumentsInput } from "./CheckCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  title?: string | null;
  submissionDate?: Date | null;
  checks?: CheckCreateNestedManyWithoutDocumentsInput;
  content?: string | null;
  author?: string | null;
};
