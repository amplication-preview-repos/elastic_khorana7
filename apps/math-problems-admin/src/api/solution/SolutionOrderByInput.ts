import { SortOrder } from "../../util/SortOrder";

export type SolutionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
};
