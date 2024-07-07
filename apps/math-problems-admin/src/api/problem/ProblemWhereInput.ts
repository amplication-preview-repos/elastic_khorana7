import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProblemWhereInput = {
  id?: StringFilter;
  difficulty?: "Option1";
  likes?: IntNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  dislikes?: IntNullableFilter;
};
