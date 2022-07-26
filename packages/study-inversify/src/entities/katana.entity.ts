import { injectable } from "inversify";
import { Weapon } from "../interfaces/weapon.interface";

@injectable()
export class Katana implements Weapon {
  public hit() {
    return "cut!";
  }
}
