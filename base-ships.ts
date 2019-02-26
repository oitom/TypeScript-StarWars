class Spacecraft { 
    constructor (public propulsor: string) { 

    }

    jumpIntoHyperspace() {
        console.log(`Entering hyoer space with ${this.propulsor}`)
    }
}

interface Containership {
    cargoContainers: number
}

export {Spacecraft, Containership}