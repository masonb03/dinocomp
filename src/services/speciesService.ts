import type { Species } from "../types/species";
import { db } from "../firestore/firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

export async function fetchSpecies(): Promise<Species[]> {
    try {
        const snapshot = await getDocs(collection(db, 'species'))
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Species[]
    } catch (error) {
        console.error("Error fetching species:", error)
        return []
    }
}

export async function fetchSpeciesById(id: string): Promise<Species | null> {
    const snapshot = await getDoc(doc(db, 'species', id))
    if (!snapshot.exists()) return null
    return { id: snapshot.id, ...snapshot.data() } as Species
}