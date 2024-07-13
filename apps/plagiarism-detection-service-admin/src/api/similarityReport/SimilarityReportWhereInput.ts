import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CheckWhereUniqueInput } from "../check/CheckWhereUniqueInput";

export type SimilarityReportWhereInput = {
  id?: StringFilter;
  matchPercentage?: FloatNullableFilter;
  matchSnippet?: StringNullableFilter;
  check?: CheckWhereUniqueInput;
  matchedDocument?: StringNullableFilter;
};
