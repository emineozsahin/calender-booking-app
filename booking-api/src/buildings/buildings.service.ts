import { Building, BuildingDocument } from './entities/building.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateBuildingInput } from './dto/create-building.input';
import { UpdateBuildingInput } from './dto/update-building.input';
import { Model } from 'mongoose'
@Injectable()
export class BuildingsService {

  constructor(@InjectModel(Building.name) private buildingModel: Model<BuildingDocument>) {}
  create(createBuildingInput: CreateBuildingInput) {
    return 'This action adds a new building';
  }

  findAll() {
    return `This action returns all buildings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} building`;
  }

  update(id: number, updateBuildingInput: UpdateBuildingInput) {
    return `This action updates a #${id} building`;
  }

  remove(id: number) {
    return `This action removes a #${id} building`;
  }

  bulkCreate(buildings: Building[]) {
    return this.buildingModel.bulkSave(buildings.map(b => new this.buildingModel(b)))
  }

  deleteAll() {
    return this.buildingModel.deleteMany({}).lean()
  }
}
