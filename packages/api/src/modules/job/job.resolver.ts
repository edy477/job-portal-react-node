import { Inject, Service } from "typedi"
import { Arg, Mutation, Resolver } from "type-graphql"
import {JobType} from "./jobtype.model"
import { JobService } from "./job.service"
import { RegisterJobTypeInput } from "./inputs/registerjobtype.input"


@Service()
@Resolver(() => JobType)
export default class JobTypeResolver{


  @Inject(() => JobService)
  jobService : JobService


@Mutation(() => JobType)
  async registerJobType(@Arg("data") data: RegisterJobTypeInput): Promise<JobType>{
    const jobType = await this.jobService.registerJobType(data)

    // @ts-ignore
  return jobType;

}






}