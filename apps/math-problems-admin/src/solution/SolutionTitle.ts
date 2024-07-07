import { Solution as TSolution } from "../api/solution/Solution";

export const SOLUTION_TITLE_FIELD = "id";

export const SolutionTitle = (record: TSolution): string => {
  return record.id?.toString() || String(record.id);
};
