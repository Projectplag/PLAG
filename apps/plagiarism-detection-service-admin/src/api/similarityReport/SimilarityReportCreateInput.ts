import { CheckWhereUniqueInput } from "../check/CheckWhereUniqueInput";

export type SimilarityReportCreateInput = {
  matchPercentage?: number | null;
  matchSnippet?: string | null;
  check?: CheckWhereUniqueInput | null;
  matchedDocument?: string | null;
};
