import { Check as TCheck } from "../api/check/Check";

export const CHECK_TITLE_FIELD = "id";

export const CheckTitle = (record: TCheck): string => {
  return record.id?.toString() || String(record.id);
};
