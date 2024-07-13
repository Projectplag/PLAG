import { Check } from "../check/Check";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  submissionDate: Date | null;
  checks?: Array<Check>;
  content: string | null;
  author: string | null;
};
