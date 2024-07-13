import { SortOrder } from "../../util/SortOrder";

export type CheckOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  documentId?: SortOrder;
  checkedBy?: SortOrder;
  checkDate?: SortOrder;
  similarityScore?: SortOrder;
  report?: SortOrder;
};
