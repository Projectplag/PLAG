import { SimilarityReport as TSimilarityReport } from "../api/similarityReport/SimilarityReport";

export const SIMILARITYREPORT_TITLE_FIELD = "id";

export const SimilarityReportTitle = (record: TSimilarityReport): string => {
  return record.id?.toString() || String(record.id);
};
