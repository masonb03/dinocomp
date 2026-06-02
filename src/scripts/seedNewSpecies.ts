import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1VSWrvUlFqdtVyqcNpIP97VjnkJ4vHCU",
  authDomain: "dinocomp-4c53d.firebaseapp.com",
  projectId: "dinocomp-4c53d",
  storageBucket: "dinocomp-4c53d.firebasestorage.app",
  messagingSenderId: "799131674141",
  appId: "1:799131674141:web:84947acd4cab2ce7d4c8f4"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const newSpecies = [
  {
    commonName: "Edmontosaurus",
    scientificName: "Edmontosaurus regalis",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 13,
    massKg: 4000,
    continent: "North America",
    discoveryYear: 1917,
    description: "Edmontosaurus was one of the largest hadrosaurs ever discovered, roaming the floodplains of western North America in vast herds during the late Cretaceous. It had a broad, flat beak ideal for cropping low-lying vegetation and hundreds of tightly packed teeth for grinding plant matter. Fossil evidence including preserved skin impressions shows it had a pebbly, scaly hide. Some specimens show healed bite marks from T. rex, suggesting it was a primary prey item for the apex predators of its time."
  },
  {
    commonName: "Styracosaurus",
    scientificName: "Styracosaurus albertensis",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 5.5,
    massKg: 2700,
    continent: "North America",
    discoveryYear: 1913,
    description: "Styracosaurus was a striking ceratopsian dinosaur distinguished by its elaborate frill adorned with six long spikes radiating outward like a crown. A single large horn projected from its nose, making it one of the most visually dramatic dinosaurs of the Cretaceous. It lived in what is now Alberta, Canada, and likely traveled in large herds for protection. The frill spikes were probably used for display and species recognition rather than direct combat, though the nasal horn may have served a defensive purpose against predators."
  },
  {
    commonName: "Maiasaura",
    scientificName: "Maiasaura peeblesorum",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 9,
    massKg: 3000,
    continent: "North America",
    discoveryYear: 1978,
    description: "Maiasaura, whose name means good mother lizard, transformed our understanding of dinosaur parenting when nesting colonies were discovered in Montana in the 1970s. Fossil evidence shows that Maiasaura cared for its young in the nest, bringing food to hatchlings until they were large enough to fend for themselves — behaviour previously thought impossible in dinosaurs. The nesting sites contain hundreds of individuals suggesting they bred in large communal colonies. It was a hadrosaur with a flat, broad skull and a small crest above its eyes."
  },
  {
    commonName: "Thescelosaurus",
    scientificName: "Thescelosaurus neglectus",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 4,
    massKg: 300,
    continent: "North America",
    discoveryYear: 1891,
    description: "Thescelosaurus was a small to medium-sized ornithopod that lived alongside giants like T. rex and Triceratops in the final million years before the mass extinction event. Despite its unremarkable appearance it has gained scientific fame through a remarkable specimen nicknamed Willo, which was initially thought to preserve a fossilised heart — though this interpretation remains debated. It was a robust, heavily built animal for its size with strong hind limbs, and likely relied on speed and dense vegetation for protection from predators."
  },
  {
    commonName: "Euoplocephalus",
    scientificName: "Euoplocephalus tutus",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 6,
    massKg: 2200,
    continent: "North America",
    discoveryYear: 1902,
    description: "Euoplocephalus was one of the most heavily armoured dinosaurs ever to walk the Earth. Its entire back was covered in a mosaic of bony plates and spikes embedded directly into the skin, and even its eyelids were reinforced with bone. The tail ended in a massive bony club that it could swing with enough force to shatter the leg bones of a large theropod. Despite this formidable arsenal it was a dedicated herbivore, using its broad beak to graze on low-lying plants across the floodplains of Cretaceous North America."
  },
  {
    commonName: "Corythosaurus",
    scientificName: "Corythosaurus casuarius",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 9,
    massKg: 3800,
    continent: "North America",
    discoveryYear: 1914,
    description: "Corythosaurus was a large crested hadrosaur named for its helmet-shaped cranial crest which resembled the rounded helmet of a Corinthian soldier. The hollow crest was connected to the nasal passages and is believed to have functioned as a resonating chamber, allowing Corythosaurus to produce loud, low-frequency calls to communicate with herd members across long distances. Exceptional preservation of some specimens includes fossilised skin showing a pebbly texture and patches of reddish-brown pigmentation, giving us rare direct evidence of dinosaur colouration."
  },
  {
    commonName: "Pachyrhinosaurus",
    scientificName: "Pachyrhinosaurus canadensis",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 8,
    massKg: 3500,
    continent: "North America",
    discoveryYear: 1950,
    description: "Pachyrhinosaurus was an unusual ceratopsian that differed from its relatives like Triceratops by having a massive flattened boss of bone on its snout instead of a pointed horn. This thick nasal mass may have been used for head-butting contests between rivals, similar to modern musk oxen. It had a large elaborate frill decorated with small hooks and projections, and short horns above its eyes. Large bonebeds in Alberta suggest it migrated in enormous herds, possibly numbering in the thousands, across the Arctic regions of Late Cretaceous North America."
  },
  {
    commonName: "Kentrosaurus",
    scientificName: "Kentrosaurus aethiopicus",
    clade: "ornithischian",
    period: "Jurassic",
    diet: "herbivore",
    lengthM: 4.5,
    massKg: 700,
    continent: "Africa",
    discoveryYear: 1915,
    description: "Kentrosaurus was a stegosaurid from the Late Jurassic of Tanzania, closely related to the better-known North American Stegosaurus. Where Stegosaurus had broad plates along its back, Kentrosaurus had a combination of smaller plates near the shoulders and long sharp spikes running down its back and tail. The shoulder spikes in particular were formidable defensive weapons. It was discovered during large-scale German excavations at Tendaguru in the early twentieth century, one of the richest dinosaur fossil sites ever found in Africa."
  },
  {
    commonName: "Baryonyx",
    scientificName: "Baryonyx walkeri",
    clade: "theropod",
    period: "Cretaceous",
    diet: "carnivore",
    lengthM: 10,
    massKg: 1700,
    continent: "Europe",
    discoveryYear: 1983,
    description: "Baryonyx was a large spinosaurid theropod discovered in a clay pit in Surrey, England in 1983, causing considerable excitement as one of the most complete large theropod skeletons ever found in Europe. It had a long, narrow skull resembling a crocodile, a large curved claw on its thumb, and teeth adapted for gripping slippery prey. Fish scales and bones were found in its stomach region, confirming it was at least partly piscivorous. It walked on two legs but its body plan suggests it could have waded into water to catch fish much like a large modern heron."
  },
  {
    commonName: "Ceratosaurus",
    scientificName: "Ceratosaurus nasicornis",
    clade: "theropod",
    period: "Jurassic",
    diet: "carnivore",
    lengthM: 7,
    massKg: 500,
    continent: "North America",
    discoveryYear: 1884,
    description: "Ceratosaurus was a distinctive Jurassic predator recognisable by the prominent horn on its snout and smaller horns above each eye — an unusual feature among theropods. It had a deep, blade-like tail and bony osteoderms running along its back, setting it apart from its contemporaries like Allosaurus. Despite living alongside much larger predators it occupied a different ecological niche, possibly hunting smaller prey or ambushing animals near water. Its large nasal horn was likely used for display or species recognition rather than as a weapon."
  },
  {
    commonName: "Torosaurus",
    scientificName: "Torosaurus latus",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 9,
    massKg: 6000,
    continent: "North America",
    discoveryYear: 1891,
    description: "Torosaurus possessed the largest skull of any land animal ever discovered, with some specimens measuring nearly three metres from beak to frill tip. It was a ceratopsian closely related to Triceratops and lived in the same time and place, which has led to a long-running scientific debate about whether Torosaurus was actually a mature form of Triceratops rather than a separate species. The enormous frill was filled with large fenestrae — openings in the bone — which reduced its weight while still providing a large surface for display and species recognition."
  },
  {
    commonName: "Suchomimus",
    scientificName: "Suchomimus tenerensis",
    clade: "theropod",
    period: "Cretaceous",
    diet: "carnivore",
    lengthM: 11,
    massKg: 2500,
    continent: "Africa",
    discoveryYear: 1997,
    description: "Suchomimus, meaning crocodile mimic, was a large spinosaurid theropod from the Sahara region of Niger. Its long, narrow snout was lined with over a hundred interlocking teeth ideal for catching fish, and its large thumb claws were well suited for hooking prey from the water. It had a low ridge or sail running along its back, smaller than that of its close relative Spinosaurus. Discovered by palaeontologist Paul Sereno in 1997, Suchomimus is one of several giant predators from Cretaceous Africa that suggest the continent was home to an exceptionally diverse predator community."
  },
  {
    commonName: "Dilophosaurus",
    scientificName: "Dilophosaurus wetherilli",
    clade: "theropod",
    period: "Jurassic",
    diet: "carnivore",
    lengthM: 6,
    massKg: 400,
    continent: "North America",
    discoveryYear: 1942,
    description: "Dilophosaurus was one of the earliest large predatory dinosaurs of North America, distinguished by two thin parallel crests running along the top of its skull. These delicate crests were almost certainly used for display rather than combat as they were too fragile to withstand significant force. It is widely known from its fictional depiction in Jurassic Park as a venom-spitting dinosaur, but there is no scientific evidence it could spit venom — this was a creative invention. In reality it was a swift bipedal predator with a relatively slender build, well adapted for hunting the prey animals of the Early Jurassic."
  },
  {
    commonName: "Ouranosaurus",
    scientificName: "Ouranosaurus nigeriensis",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 8.3,
    massKg: 4000,
    continent: "Africa",
    discoveryYear: 1966,
    description: "Ouranosaurus was a large iguanodontid from the Early Cretaceous of Niger, notable for the tall neural spines running along its back which formed a prominent sail or hump similar to that seen in Spinosaurus. Whether this structure supported a thin skin sail for thermoregulation or a fatty hump for energy storage like a camel remains debated among palaeontologists. It had the characteristic thumb spike of iguanodontids and a broad flat skull with a duck-like beak. It lived in a warm, humid environment alongside large predators including early spinosaurids."
  },
  {
    commonName: "Carcharodontosaurus",
    scientificName: "Carcharodontosaurus saharicus",
    clade: "theropod",
    period: "Cretaceous",
    diet: "carnivore",
    lengthM: 13,
    massKg: 6200,
    continent: "Africa",
    discoveryYear: 1927,
    description: "Carcharodontosaurus, named for the shark-like serrations on its teeth, was one of the largest terrestrial predators ever to exist, rivalling T. rex and Giganotosaurus in size. It roamed the river systems of North Africa during the mid-Cretaceous, hunting massive sauropods like Paralititan. The original fossils were destroyed during World War Two when the Munich museum housing them was bombed, and the species was only properly described after new specimens were discovered by Paul Sereno in Morocco in 1996. Its skull was longer than that of T. rex but more lightly built with smaller teeth."
  },
  {
    commonName: "Troodon",
    scientificName: "Troodon formosus",
    clade: "theropod",
    period: "Cretaceous",
    diet: "omnivore",
    lengthM: 2.4,
    massKg: 50,
    continent: "North America",
    discoveryYear: 1856,
    description: "Troodon was a small but remarkably intelligent dinosaur with a brain-to-body ratio among the highest of any known dinosaur, suggesting cognitive abilities well beyond most of its contemporaries. It had large forward-facing eyes indicating good binocular vision, possibly adapted for hunting in low-light conditions. Its diet appears to have been omnivorous based on tooth wear patterns and gut contents. Troodon has become famous in popular science as the basis for the hypothetical Dinosauroid thought experiment — if the extinction had not occurred, could a Troodon-like animal have eventually evolved human-level intelligence?"
  },
  {
    commonName: "Amargasaurus",
    scientificName: "Amargasaurus cazaui",
    clade: "sauropod",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 10,
    massKg: 6000,
    continent: "South America",
    discoveryYear: 1991,
    description: "Amargasaurus was a relatively small sauropod from the Early Cretaceous of Argentina, remarkable for the two parallel rows of tall spines projecting from its neck and back vertebrae. These spines were unique among sauropods and may have supported a twin sail of skin, been covered in a keratin sheath to form defensive spikes, or simply been display structures used for species recognition and mate attraction. Despite its unusual appearance it was a dedicated herbivore, using its peg-like teeth to strip leaves from branches. Its discovery added significantly to our understanding of South American sauropod diversity."
  },
  {
    commonName: "Hypsilophodon",
    scientificName: "Hypsilophodon foxii",
    clade: "ornithischian",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 2,
    massKg: 20,
    continent: "Europe",
    discoveryYear: 1849,
    description: "Hypsilophodon was a small, agile ornithopod from the Early Cretaceous of the Isle of Wight, England. For many decades after its discovery it was incorrectly depicted as a tree-climbing dinosaur, living in the branches like a squirrel — an interpretation now completely rejected. In reality it was a fast-running ground dweller with long hind limbs adapted for sprinting. It had a self-sharpening tooth arrangement that kept its cheek teeth sharp throughout its life. Hypsilophodon is one of the best-known Early Cretaceous dinosaurs from Europe and dozens of specimens have been recovered from the island."
  },
  {
    commonName: "Nigersaurus",
    scientificName: "Nigersaurus taqueti",
    clade: "sauropod",
    period: "Cretaceous",
    diet: "herbivore",
    lengthM: 9,
    massKg: 4000,
    continent: "Africa",
    discoveryYear: 1976,
    description: "Nigersaurus was one of the most bizarre sauropods ever discovered, with a remarkably wide straight-edged muzzle that has been compared to the head of a vacuum cleaner. Its skull contained over five hundred tiny teeth arranged in tight batteries at the very front of the jaw, replaced continuously throughout its life, perfectly adapted for grazing on ground-level vegetation. Unlike most sauropods which held their necks upright to browse trees, Nigersaurus likely held its neck horizontally, sweeping its broad mouth across the ground like a lawnmower. It was discovered in Niger and described in detail by Paul Sereno in 2007."
  },
  {
    commonName: "Herrerasaurus",
    scientificName: "Herrerasaurus ischigualastensis",
    clade: "theropod",
    period: "Triassic",
    diet: "carnivore",
    lengthM: 6,
    massKg: 350,
    continent: "South America",
    discoveryYear: 1958,
    description: "Herrerasaurus is one of the oldest known dinosaurs, dating back approximately 230 million years to the Late Triassic of Argentina. Its discovery was crucial in helping scientists understand the early evolution of dinosaurs as a group. It was a bipedal predator with a flexible lower jaw joint that allowed it to grip struggling prey more securely — a feature seen in some modern lizards. Its exact position in the dinosaur family tree has been debated for decades, with some analyses placing it as an early theropod and others suggesting it branched off even earlier in dinosaur evolution before the major groups diverged."
  }
]

async function seed() {
  const col = collection(db, 'species')
  for (const s of newSpecies) {
    await addDoc(col, s)
    console.log(`Added: ${s.commonName}`)
  }
  console.log('Done — 20 new species added.')
}

seed()