import { inject, injectable } from "inversify";
import { ThrowableWeapon } from "../interfaces/throwable-weapon.interface";
import { Warrior } from "../interfaces/warrior.interface";
import { Weapon } from "../interfaces/weapon.interface";
import { TYPES } from "../types";

@injectable()
export class Ninja implements Warrior {
  private _katana: Weapon;
  private _shuriken: ThrowableWeapon;

  public constructor(
    @inject(TYPES.Weapon) katana: Weapon,
    @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
  ) {
    this._katana = katana;
    this._shuriken = shuriken;
  }

  public fight() {
    return this._katana.hit();
  }
  public sneak() {
    return this._shuriken.throw();
  }
}
