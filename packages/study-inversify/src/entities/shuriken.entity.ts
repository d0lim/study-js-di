import { injectable } from "inversify";
import { ThrowableWeapon } from "../interfaces/throwable-weapon.interface";

@injectable()
export class Shuriken implements ThrowableWeapon {
  public throw() {
    return "hit!";
  }
}
