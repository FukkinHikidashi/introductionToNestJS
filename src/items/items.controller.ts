import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { CreateItemDto } from './DTO/create-item.dto';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: String): Item {
    return this.itemsService.findById(id);
  }

  @Post()
  create(@Body() CreateItemDto: CreateItemDto): Item {
    return this.itemsService.create(CreateItemDto);
  }

  @Patch(':id')
  updateStatus(@Param('id') id: String): Item {
    return this.itemsService.updateStatus(id)
  }

  @Delete(':id')
  delete(@Param('id') id: String): void {
    this.itemsService.delete(id);
  }
}
