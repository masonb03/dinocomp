import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1VSWrvUlFqdtVyqcNpIP97VjnkJ4vHCU",
  authDomain: "dinocomp-4c53d.firebaseapp.com",
  projectId: "dinocomp-4c53d",
  storageBucket: "dinocomp-4c53d.firebasestorage.app",
  messagingSenderId: "799131674141",
  appId: "1:799131674141:web:84947acd4cab2ce7d4c8f4"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const species = [
  {
    commonName: "Velociraptor",
    scientificName: "Velociraptor mongoliensis",
    clade: "theropod",
    period: "Cretaceous",
    diet: "carnivore",
    lengthM: 1.8,
    massKg: 15,
    continent: "Asia",
    discoveryYear: 1923,
    description: "A small but agile predator from the Gobi Desert. Velociraptor was feathered and likely hunted in a similar fashion to modern birds of prey."
  },
  {
    commonName: "Spinosaurus",
    scientificName: "Spinosaurus aegyptiacus",
    clade: "theropod",
    period: "Cretaceous",
    diet: "carnivore",
    lengthM: 14,
    massKg: 7400,
    continent: "Africa",
    discoveryYear: 1912,
    description: "The longest known carnivorous dinosaur, Spinosaurus was semi-aquatic and likely fed primarily on fish. Its distinctive sail ran the length of its back."
  },
  {
    commonName: "Triceratops",
    scientificName: "Triceratops horridus",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 9,
    massKg: 12000,
    continent: "North America",
    discoveryYear: 1889,
    description: "One of the most recognisable dinosaurs, Triceratops had three facial horns and a large bony frill. It lived alongside T. rex in the late Cretaceous."
  },
  {
    commonName: "Brachiosaurus",
    scientificName: "Brachiosaurus altithorax",
    clade: "sauropod",
    period: "Jurassic",
    diet: "herbivore",
    lengthM: 26,
    massKg: 56000,
    continent: "North America",
    discoveryYear: 1900,
    description: "A massive long-necked sauropod that used its height to browse vegetation unreachable by other herbivores. One of the tallest dinosaurs ever discovered."
  },
  {
    commonName: "Allosaurus",
    scientificName: "Allosaurus fragilis",
    clade: "theropod",
    period: "Jurassic",
    diet: "carnivore",
    lengthM: 9.7,
    massKg: 2300,
    continent: "North America",
    discoveryYear: 1877,
    description: "The apex predator of the late Jurassic, Allosaurus was a large bipedal theropod with a distinctive ridge above each eye. It likely hunted large sauropods."
  },
  {
    commonName: "Stegosaurus",
    scientificName: "Stegosaurus stenops",
    clade: "ornithischian",
    period: "Jurassic",
    diet: "herbivore",
    lengthM: 9,
    massKg: 5000,
    continent: "North America",
    discoveryYear: 1877,
    description: "Recognisable by the large bony plates along its back and spiked tail, Stegosaurus was a slow-moving herbivore that used its tail spikes as a defensive weapon."
  },
  {
    commonName: "Ankylosaurus",
    scientificName: "Ankylosaurus magniventris",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 8,
    massKg: 6000,
    continent: "North America",
    discoveryYear: 1906,
    description: "A heavily armoured herbivore with a large bony club at the end of its tail. Ankylosaurus was built like a living tank, capable of breaking bones with a single tail swing."
  },
  {
    commonName: "Diplodocus",
    scientificName: "Diplodocus carnegii",
    clade: "sauropod",
    period: "Jurassic",
    diet: "herbivore",
    lengthM: 24,
    massKg: 14000,
    continent: "North America",
    discoveryYear: 1877,
    description: "One of the longest dinosaurs, Diplodocus had an extremely long whip-like tail it may have used for defence. Its neck allowed it to graze over a wide area without moving."
  },
  {
    commonName: "Carnotaurus",
    scientificName: "Carnotaurus sastrei",
    clade: "theropod",
    period: "Cretaceous",
    diet: "carnivore",
    lengthM: 7.5,
    massKg: 1500,
    continent: "South America",
    discoveryYear: 1984,
    description: "A fast-running predator from Patagonia with two distinctive horns above its eyes. Carnotaurus had unusually small arms even compared to other theropods."
  },
  {
    commonName: "Parasaurolophus",
    scientificName: "Parasaurolophus walkeri",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 9.5,
    massKg: 2500,
    continent: "North America",
    discoveryYear: 1922,
    description: "A hadrosaur famous for its long hollow cranial crest, which is believed to have been used to produce resonant calls for communication within herds."
  },
  {
    commonName: "Giganotosaurus",
    scientificName: "Giganotosaurus carolinii",
    clade: "theropod",
    period: "Cretaceous",
    diet: "carnivore",
    lengthM: 12.5,
    massKg: 6900,
    continent: "South America",
    discoveryYear: 1993,
    description: "One of the largest theropods ever found, Giganotosaurus rivalled T. rex in size. It hunted massive titanosaur sauropods on the plains of what is now Argentina."
  },
  {
    commonName: "Iguanodon",
    scientificName: "Iguanodon bernissartensis",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 10,
    massKg: 3000,
    continent: "Europe",
    discoveryYear: 1825,
    description: "One of the first dinosaurs ever described, Iguanodon was a large herbivore with distinctive thumb spikes likely used for defence or foraging."
  },
  {
    commonName: "Pachycephalosaurus",
    scientificName: "Pachycephalosaurus wyomingensis",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 4.5,
    massKg: 450,
    continent: "North America",
    discoveryYear: 1931,
    description: "Known for its domed skull up to 25cm thick, Pachycephalosaurus likely used head-butting behaviour in competition with rivals, similar to modern bighorn sheep."
  },
  {
    commonName: "Archaeopteryx",
    scientificName: "Archaeopteryx lithographica",
    clade: "theropod",
    period: "Jurassic",
    diet: "carnivore",
    lengthM: 0.5,
    massKg: 1,
    continent: "Europe",
    discoveryYear: 1861,
    description: "Often considered a transitional fossil between non-avian dinosaurs and birds, Archaeopteryx had feathers and wings but also retained teeth and a bony tail."
  },
  {
    commonName: "Therizinosaurus",
    scientificName: "Therizinosaurus cheloniformis",
    clade: "theropod",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 10,
    massKg: 5000,
    continent: "Asia",
    discoveryYear: 1948,
    description: "A bizarre theropod with enormous claws up to 1 metre long, used for pulling down vegetation rather than hunting. One of the strangest-looking dinosaurs ever discovered."
  },
  {
    commonName: "Mosasaurus",
    scientificName: "Mosasaurus hoffmannii",
    clade: "theropod",
    period: "Cretaceous",
    diet: "carnivore",
    lengthM: 17,
    massKg: 14000,
    continent: "Europe",
    discoveryYear: 1829,
    description: "A massive marine reptile rather than a true dinosaur, Mosasaurus was an apex predator of late Cretaceous seas with a powerful tail and double-hinged jaws."
  },
  {
    commonName: "Coelophysis",
    scientificName: "Coelophysis bauri",
    clade: "theropod",
    period: "Triassic",
    diet: "carnivore",
    lengthM: 2.8,
    massKg: 18,
    continent: "North America",
    discoveryYear: 1881,
    description: "One of the earliest known dinosaurs, Coelophysis was a small lightly built predator that hunted in packs. Mass graves suggest it lived in large social groups."
  },
  {
    commonName: "Plateosaurus",
    scientificName: "Plateosaurus engelhardti",
    clade: "sauropod",
    period: "Triassic",
    diet: "herbivore",
    lengthM: 8,
    massKg: 4000,
    continent: "Europe",
    discoveryYear: 1837,
    description: "One of the first large dinosaurs, Plateosaurus was an early prosauropod that could walk on two or four legs. It is one of the best understood Triassic dinosaurs."
  },
  {
    commonName: "Deinonychus",
    scientificName: "Deinonychus antirrhopus",
    clade: "theropod",
    period: "Cretaceous",
    diet: "carnivore",
    lengthM: 3.4,
    massKg: 73,
    continent: "North America",
    discoveryYear: 1964,
    description: "The discovery of Deinonychus in 1964 revolutionised how scientists thought about dinosaurs, suggesting they were active warm-blooded animals rather than sluggish reptiles."
  }
]

async function seed() {
  const col = collection(db, 'species')
  for (const s of species) {
    await addDoc(col, s)
    console.log(`Added: ${s.commonName}`)
  }
  console.log('Seeding complete.')
}

seed()