import { filterSpecies } from './filterSpecies';
import type { Species } from '../types/species';

const mockSpecies: Species[] = [
  {
    id: '1',
    commonName: 'T. rex',
    scientificName: 'Tyrannosaurus rex',
    clade: 'theropod',
    period: 'Cretaceous',
    diet: 'carnivore',
    lengthM: 12,
    massKg: 8000,
    continent: 'North America',
    discoveryYear: 1902,
    description: 'A large theropod.'
  },
  {
    id: '2',
    commonName: 'Brachiosaurus',
    scientificName: 'Brachiosaurus altithorax',
    clade: 'sauropod',
    period: 'Jurassic',
    diet: 'herbivore',
    lengthM: 26,
    massKg: 56000,
    continent: 'North America',
    discoveryYear: 1900,
    description: 'A large sauropod.'
  },
  {
    id: '3',
    commonName: 'Triceratops',
    scientificName: 'Triceratops horridus',
    clade: 'ornithischian',
    period: 'Cretaceous',
    diet: 'herbivore',
    lengthM: 9,
    massKg: 12000,
    continent: 'North America',
    discoveryYear: 1889,
    description: 'A large ceratopsian.'
  }
]

const emptyFilters = {
    period: [],
    clade: [],
    diet: [],
    continent: []
}

describe('filterSpecies', () => {
    it('returns all species when no filters are applied', () => {
        const result = filterSpecies(mockSpecies, emptyFilters, '')
        expect(result).toHaveLength(3)
    })

    test('filters by period', () => {
    const result = filterSpecies(mockSpecies, { ...emptyFilters, period: ['Cretaceous'] }, '')
    expect(result).toHaveLength(2)
    expect(result.every(s => s.period === 'Cretaceous')).toBe(true)
  })

  test('filters by diet', () => {
    const result = filterSpecies(mockSpecies, { ...emptyFilters, diet: ['herbivore'] }, '')
    expect(result).toHaveLength(2)
    expect(result.every(s => s.diet === 'herbivore')).toBe(true)
  })

  test('filters by clade', () => {
    const result = filterSpecies(mockSpecies, { ...emptyFilters, clade: ['theropod'] }, '')
    expect(result).toHaveLength(1)
    expect(result[0].commonName).toBe('T. rex')
  })

  test('filters by multiple periods using OR logic', () => {
    const result = filterSpecies(mockSpecies, { ...emptyFilters, period: ['Cretaceous', 'Jurassic'] }, '')
    expect(result).toHaveLength(3)
  })

  test('filters by multiple categories using AND logic', () => {
    const result = filterSpecies(mockSpecies, { ...emptyFilters, period: ['Cretaceous'], diet: ['carnivore'] }, '')
    expect(result).toHaveLength(1)
    expect(result[0].commonName).toBe('T. rex')
  })

  test('filters by search query case insensitively', () => {
    const result = filterSpecies(mockSpecies, emptyFilters, 'rex')
    expect(result).toHaveLength(1)
    expect(result[0].commonName).toBe('T. rex')
  })

  test('returns empty array when no species match', () => {
    const result = filterSpecies(mockSpecies, { ...emptyFilters, period: ['Triassic'] }, '')
    expect(result).toHaveLength(0)
  })

  test('returns empty array when search matches nothing', () => {
    const result = filterSpecies(mockSpecies, emptyFilters, 'zzznomatch')
    expect(result).toHaveLength(0)
  })

  test('combines search and filters correctly', () => {
    const result = filterSpecies(mockSpecies, { ...emptyFilters, diet: ['herbivore'] }, 'tri')
    expect(result).toHaveLength(1)
    expect(result[0].commonName).toBe('Triceratops')
  })
})