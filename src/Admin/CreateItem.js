import React from "react";
import Modal from '../Components/Modal';
import CreateItemForm from '../Components/CreateItemForm';


const CreateItem = () => {
    return (
        <Modal children= {<CreateItemForm/>}/>
    )
}

export default CreateItem;