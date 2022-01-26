import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { Company, CompanyDocument } from './entities/company.entity';
import { Model } from 'mongoose'

@Injectable()
export class CompaniesService {
  constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {}
  
  create(createCompanyInput: CreateCompanyInput) {
    return 'This action adds a new company';
  }

  bulkCreate(companies: Company[]) {
    return this.companyModel.bulkSave(companies.map(c => new this.companyModel(c)))
  }

  findAll() {
    return this.companyModel.find({}).lean()
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyInput: UpdateCompanyInput) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }

  deleteAll() {
    return this.companyModel.deleteMany({}).lean()
  }
}
