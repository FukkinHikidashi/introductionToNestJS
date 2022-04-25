import { ItemStatus } from "./item-status.enum";

export interface Item {
  id: String;
  name: String;
  price: Number;
  description: String;
  status: ItemStatus;
}