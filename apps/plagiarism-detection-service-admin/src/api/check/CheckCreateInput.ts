import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SimilarityReportCreateNestedManyWithoutChecksInput } from "./SimilarityReportCreateNestedManyWithoutChecksInput";

export type CheckCreateInput = {
  document?: DocumentWhereUniqueInput | null;
  checkedBy?: string | null;
  checkDate?: Date | null;
  similarityScore?: number | null;
  report?: InputJsonValue;
  similarityReports?: SimilarityReportCreateNestedManyWithoutChecksInput;
};
