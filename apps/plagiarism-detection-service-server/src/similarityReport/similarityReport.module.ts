import { Module } from "@nestjs/common";
import { SimilarityReportModuleBase } from "./base/similarityReport.module.base";
import { SimilarityReportService } from "./similarityReport.service";
import { SimilarityReportController } from "./similarityReport.controller";
import { SimilarityReportResolver } from "./similarityReport.resolver";

@Module({
  imports: [SimilarityReportModuleBase],
  controllers: [SimilarityReportController],
  providers: [SimilarityReportService, SimilarityReportResolver],
  exports: [SimilarityReportService],
})
export class SimilarityReportModule {}
