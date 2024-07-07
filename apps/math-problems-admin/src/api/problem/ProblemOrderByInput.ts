import { SortOrder } from "../../util/SortOrder";

export type ProblemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  difficulty?: SortOrder;
  likes?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  dislikes?: SortOrder;
};
