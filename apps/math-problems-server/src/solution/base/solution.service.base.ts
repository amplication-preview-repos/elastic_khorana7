/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Solution as PrismaSolution } from "@prisma/client";

export class SolutionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SolutionCountArgs, "select">): Promise<number> {
    return this.prisma.solution.count(args);
  }

  async solutions(
    args: Prisma.SolutionFindManyArgs
  ): Promise<PrismaSolution[]> {
    return this.prisma.solution.findMany(args);
  }
  async solution(
    args: Prisma.SolutionFindUniqueArgs
  ): Promise<PrismaSolution | null> {
    return this.prisma.solution.findUnique(args);
  }
  async createSolution(
    args: Prisma.SolutionCreateArgs
  ): Promise<PrismaSolution> {
    return this.prisma.solution.create(args);
  }
  async updateSolution(
    args: Prisma.SolutionUpdateArgs
  ): Promise<PrismaSolution> {
    return this.prisma.solution.update(args);
  }
  async deleteSolution(
    args: Prisma.SolutionDeleteArgs
  ): Promise<PrismaSolution> {
    return this.prisma.solution.delete(args);
  }
}
