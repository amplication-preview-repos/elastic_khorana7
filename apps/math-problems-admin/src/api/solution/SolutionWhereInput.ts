import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SolutionWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
};
