import * as Prisma from "@prisma/client"
import { Field, ObjectType } from "type-graphql"


@ObjectType()
export class JobType  implements Prisma.jobtype {

    @Field()
    id: number

    @Field()
    job_type: string

}