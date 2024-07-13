import { CheckUpdateManyWithoutDocumentsInput } from "./CheckUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  title?: string | null;
  submissionDate?: Date | null;
  checks?: CheckUpdateManyWithoutDocumentsInput;
  content?: string | null;
  author?: string | null;
};
