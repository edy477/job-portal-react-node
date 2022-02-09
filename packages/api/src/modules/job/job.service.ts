import { Service } from "typedi"
import { prisma } from "../../lib/prisma"
import { RegisterJobTypeInput } from "./inputs/registerjobtype.input"

@Service ()
export class  JobService {
  /*async registerJob(){


  }*/

  async registerJobType(data : RegisterJobTypeInput){
    return await prisma.jobtype.create({ data });

  }



}