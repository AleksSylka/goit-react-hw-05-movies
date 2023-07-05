import { SearchbarForm, SearchbarBtn, SearchbarInput } from "./Searchbar.styled.jsx";
import { FcSearch } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";


export const Searchbar = ({onSubmit}) => {
    const [inputData, setInputData] = useState('');

    const handleChange = event => {
        setInputData(event.currentTarget.value);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        if (inputData === '') {
            return toast(`Enter your search data`);
        }
        onSubmit(inputData);
        setInputData('');
    }

    return (
        <>
            <SearchbarForm onSubmit={formSubmit}>
                <SearchbarBtn type="submit" className="button">
                    <FcSearch size='100%'/> 
                </SearchbarBtn>
                <SearchbarInput
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search films"
                    name="inputData"
                    onChange={handleChange}
                    value={inputData}
            />
            </SearchbarForm> 
            <ToastContainer />
        </>
    )

}