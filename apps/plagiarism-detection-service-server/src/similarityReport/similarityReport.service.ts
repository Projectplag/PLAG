import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SimilarityReportServiceBase } from "./base/similarityReport.service.base";

@Injectable()
export class SimilarityReportService extends SimilarityReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
