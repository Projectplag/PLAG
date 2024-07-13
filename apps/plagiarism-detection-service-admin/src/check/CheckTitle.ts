import { Check as TCheck } from "../api/check/Check";

export const CHECK_TITLE_FIELD = "checkedBy";

export const CheckTitle = (record: TCheck): string => {
  return record.checkedBy?.toString() || String(record.id);
};
