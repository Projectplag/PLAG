import { CheckWhereUniqueInput } from "../check/CheckWhereUniqueInput";

export type SimilarityReportUpdateInput = {
  matchPercentage?: number | null;
  matchSnippet?: string | null;
  check?: CheckWhereUniqueInput | null;
  matchedDocument?: string | null;
};
