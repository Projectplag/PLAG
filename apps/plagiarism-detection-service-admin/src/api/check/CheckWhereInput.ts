import { StringFilter } from "../../util/StringFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SimilarityReportListRelationFilter } from "../similarityReport/SimilarityReportListRelationFilter";

export type CheckWhereInput = {
  id?: StringFilter;
  document?: DocumentWhereUniqueInput;
  checkedBy?: StringNullableFilter;
  checkDate?: DateTimeNullableFilter;
  similarityScore?: FloatNullableFilter;
  report?: JsonFilter;
  similarityReports?: SimilarityReportListRelationFilter;
};
