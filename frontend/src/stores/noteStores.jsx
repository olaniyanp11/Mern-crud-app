import { create } from 'zustand';
import axios from 'axios';


const url = "http://localhost:3001/";
const noteStore = create((set) => ({
    loading: true,
    notes: [],
    updatecheck: false,
    getnote: { title: "", body: "" },
    fetchNotes: async () => {
        try {
            console.log("here")
            const response = await axios.get(url);
            set({ notes: response.data.notes, loading: false });
            // Set loading to false when data is fetched
        } catch (error) {
            console.error("Error fetching notes:", error);
            set({ loading: false });
            // Set loading to false in case of an error
        }
    },
}));
export default noteStore