import { Container } from "inversify";
import { Katana } from "../entities/katana.entity";
import { Ninja } from "../entities/ninja.entity";
import { Shuriken } from "../entities/shuriken.entity";
import { ThrowableWeapon } from "../interfaces/throwable-weapon.interface";
import { Warrior } from "../interfaces/warrior.interface";
import { Weapon } from "../interfaces/weapon.interface";
import { TYPES } from "../types";

const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };
