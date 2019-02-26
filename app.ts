import { Spacecraft, Containership } from './base-ships'
import { MileniumFalcon } from './starfighters';

import * as _ from 'lodash'

console.log(_.pad("Typescript Exemples", 40, "="))

let ship = new Spacecraft('hiperdrive')
ship.jumpIntoHyperspace()

let falcon = new MileniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob (falcon)? 'YES' : 'NO'}`)