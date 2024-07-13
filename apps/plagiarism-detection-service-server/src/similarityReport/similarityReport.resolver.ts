import * as graphql from "@nestjs/graphql";
import { SimilarityReportResolverBase } from "./base/similarityReport.resolver.base";
import { SimilarityReport } from "./base/SimilarityReport";
import { SimilarityReportService } from "./similarityReport.service";

@graphql.Resolver(() => SimilarityReport)
export class SimilarityReportResolver extends SimilarityReportResolverBase {
  constructor(protected readonly service: SimilarityReportService) {
    super(service);
  }
}
