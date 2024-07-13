import { Document } from "../document/Document";
import { JsonValue } from "type-fest";
import { SimilarityReport } from "../similarityReport/SimilarityReport";

export type Check = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  document?: Document | null;
  checkedBy: string | null;
  checkDate: Date | null;
  similarityScore: number | null;
  report: JsonValue;
  similarityReports?: Array<SimilarityReport>;
};
