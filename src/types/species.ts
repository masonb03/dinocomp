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
    description: string,
    imageUrl?: string
}

export const periodColors: Record<Species['period'], string> = {
    'Triassic': '#facc15',
    'Jurassic': '#fca5a5',
    'Cretaceous': '#65a30d'
}

export const highlightColors = {
  best: { color: '#3B6D11', borderColor: '#3B6D11', backgroundColor: '#EAF3DE' },
  second: { color: '#854F0B', borderColor: '#854F0B', backgroundColor: '#FAEEDA' }
}