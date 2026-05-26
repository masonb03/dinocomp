import type { Species } from "../types/species";
import { db } from "../firestore/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function fetchSpecies(): Promise<Species[]> {
    const snapshot = await getDocs(collection(db, 'species'))
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })) as Species[]
}