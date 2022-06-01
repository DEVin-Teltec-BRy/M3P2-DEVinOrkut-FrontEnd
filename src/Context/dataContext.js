import { createContext, useContext, useState } from "react";


const DataContex = createContext()

const initUser = {
    id: '',
    fullName: '',
    email: '',
    cpf: '',
    birthDate: '',
    gender: '',
    postal: '',
    city: '',
    state: '',
    address: '',
    number: '',
    complement: '',
    district: '',
    reference: '',
    relationship: '',
    humor:[],
    interests: [],
    aboutMe: '',
    scraps: [],
    testimonial: [],
    trusty: [],
    cool: [],
    sexy: [],
    fans: [],
    profilePicture: [],
    album: [],
    friends: [],
    friendRequest: [],
    communities: [],
}
const DataProvider = ({ children }) => {
    const [ user, setUser ] = useState(initUser)

    const data = {
        user
    }
    return (
        <DataContex.Provider value={ data }>
            {children}
        </DataContex.Provider>
    )
}
const useData = () => {
    const context = useContext(DataContex)
    if (!context) {
        throw new Error("useData must be used within a DataProvider")
    }
    return context
}

export { DataProvider, useData  }