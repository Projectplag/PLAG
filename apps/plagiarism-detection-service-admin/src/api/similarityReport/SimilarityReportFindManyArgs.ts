import { SimilarityReportWhereInput } from "./SimilarityReportWhereInput";
import { SimilarityReportOrderByInput } from "./SimilarityReportOrderByInput";

export type SimilarityReportFindManyArgs = {
  where?: SimilarityReportWhereInput;
  orderBy?: Array<SimilarityReportOrderByInput>;
  skip?: number;
  take?: number;
};
