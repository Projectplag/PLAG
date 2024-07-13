import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SimilarityReportUpdateManyWithoutChecksInput } from "./SimilarityReportUpdateManyWithoutChecksInput";

export type CheckUpdateInput = {
  document?: DocumentWhereUniqueInput | null;
  checkedBy?: string | null;
  checkDate?: Date | null;
  similarityScore?: number | null;
  report?: InputJsonValue;
  similarityReports?: SimilarityReportUpdateManyWithoutChecksInput;
};
