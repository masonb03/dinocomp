export interface Species {
    id: string,
    commonName: string,
    scientificName: string,
    clade: 'theropod' | 'sauropod' | 'ornithichian',
    period: 'Triassic' | 'Jurassic' | 'Cretaceous',
    diet: 'carnivore' | 'herbivore' | 'omnivore',
    lengthM: number,
    massKg: number,
    continent: string,
    discoveryYear: number,
    description: string
}