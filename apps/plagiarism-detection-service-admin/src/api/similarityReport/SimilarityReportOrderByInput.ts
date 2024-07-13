import { SortOrder } from "../../util/SortOrder";

export type SimilarityReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  matchPercentage?: SortOrder;
  matchSnippet?: SortOrder;
  checkId?: SortOrder;
  matchedDocument?: SortOrder;
};
