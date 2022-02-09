import * as Prisma from "@prisma/client"
import { Field, ObjectType } from "type-graphql"


@ObjectType()
export class Job  implements Prisma.Job {

  @Field()
  id: number

  @Field()
  posted_by_id: number

  @Field()
  job_type_id: number


  @Field()
  company_id: number
  @Field()
  is_company_name_hidden: boolean
  @Field()
  created_date: Date

  @Field()
  job_description: string

  @Field()
  job_location_id: number

  @Field()
  is_active: string

  @Field() createdAt: Date
  @Field() updatedAt: Date
}

