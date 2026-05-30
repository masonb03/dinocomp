export interface Species {
    id: string,
    commonName: string,
    scientificName: string,
    clade: 'theropod' | 'sauropod' | 'ornithischian',
    period: 'Triassic' | 'Jurassic' | 'Cretaceous',
    diet: 'carnivore' | 'herbivore' | 'omnivore',
    lengthM: number,
    massKg: number,
    continent: string,
    discoveryYear: number,
    description: string
}

export const periodColors: Record<Species['period'], string> = {
    'Triassic': '#facc15',
    'Jurassic': '#fca5a5',
    'Cretaceous': '#65a30d'
}
