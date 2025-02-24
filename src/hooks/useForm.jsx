import React, {useState} from 'react'

const useForm = (initialState) => {
    
    const [formData, setFormData] = useState(initialState);
    console.log("inside useForm", formData);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    return [formData, handleChange];

}

export default useForm