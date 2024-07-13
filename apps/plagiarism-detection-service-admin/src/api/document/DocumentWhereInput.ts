import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CheckListRelationFilter } from "../check/CheckListRelationFilter";

export type DocumentWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  submissionDate?: DateTimeNullableFilter;
  checks?: CheckListRelationFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
};
