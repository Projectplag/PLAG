import { Check } from "../check/Check";

export type SimilarityReport = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  matchPercentage: number | null;
  matchSnippet: string | null;
  check?: Check | null;
  matchedDocument: string | null;
};
