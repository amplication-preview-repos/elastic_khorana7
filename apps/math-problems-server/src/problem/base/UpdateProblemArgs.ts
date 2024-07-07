/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProblemWhereUniqueInput } from "./ProblemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProblemUpdateInput } from "./ProblemUpdateInput";

@ArgsType()
class UpdateProblemArgs {
  @ApiProperty({
    required: true,
    type: () => ProblemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProblemWhereUniqueInput)
  @Field(() => ProblemWhereUniqueInput, { nullable: false })
  where!: ProblemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProblemUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProblemUpdateInput)
  @Field(() => ProblemUpdateInput, { nullable: false })
  data!: ProblemUpdateInput;
}

export { UpdateProblemArgs as UpdateProblemArgs };
