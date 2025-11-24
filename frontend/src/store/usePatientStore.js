import axios from "axios";
import {create} from "zustand";

export const usePatientStore = create((set) => ({
    patients : [],
    error : null,
    loading : false,

    getAllPatients : async () => {
        set({loading : true, error : null});
        try {
            const response = await axios.get("http://localhost:5000/api/patient");
            set({ patients : response.data, loading : false});  
        }catch (err){
            set({error : err.message , loading : false});
        }

    }
}));