import { IsNotEmpty } from "class-validator"
import { Field, InputType } from "type-graphql"
import {JobType} from "../jobtype.model";
@InputType()
export class RegisterJobTypeInput implements Partial<JobType> {


  @IsNotEmpty()
  @Field()
  job_type : string

}

