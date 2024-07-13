import { SimilarityReport as TSimilarityReport } from "../api/similarityReport/SimilarityReport";

export const SIMILARITYREPORT_TITLE_FIELD = "matchedDocument";

export const SimilarityReportTitle = (record: TSimilarityReport): string => {
  return record.matchedDocument?.toString() || String(record.id);
};
