import { CheckWhereInput } from "./CheckWhereInput";
import { CheckOrderByInput } from "./CheckOrderByInput";

export type CheckFindManyArgs = {
  where?: CheckWhereInput;
  orderBy?: Array<CheckOrderByInput>;
  skip?: number;
  take?: number;
};
