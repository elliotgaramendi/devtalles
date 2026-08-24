import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: randomUUID(),
      name: 'Toyota',
      createdAt: Date.now(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: randomUUID(),
      name: createBrandDto.name,
      createdAt: Date.now(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) {
      throw new NotFoundException(`Brand with id '${id}' not found`);
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    const updatedBrand: Brand = {
      ...brand,
      name: updateBrandDto.name ?? brand.name,
      updatedAt: Date.now(),
    };

    this.brands = this.brands.map((brand) =>
      brand.id === id ? updatedBrand : brand,
    );

    return updatedBrand;
  }

  remove(id: string) {
    const brand = this.findOne(id);

    this.brands = this.brands.filter((brand) => brand.id !== id);

    return brand;
  }
}
