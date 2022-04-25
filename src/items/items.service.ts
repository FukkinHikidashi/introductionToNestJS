import { Injectable } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';
import { CreateItemDto } from './DTO/create-item.dto';

@Injectable()
export class ItemsService {
  private items: Item[] = []; //なぜ初期化がいる？

  findAll(): Item[] {
    return this.items
  }
  
  findById(id: String): Item {
    return this.items.find((item) => item.id === id);
  }

  create(CreateItemDto: CreateItemDto): Item {
    const item: Item = {
      ...CreateItemDto,
      status: ItemStatus.ON_SALE,
    }
    this.items.push(item);
    return item
  }

  updateStatus(id: String): Item {
    const item = this.findById(id);
    item.status = ItemStatus.SOLD_OUT;
    return item
  }

  delete(id: String): void {
    this.items = this.items.filter(item => item.id !== id)
  }
}
