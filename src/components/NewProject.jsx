import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel}) {
    const modal = useRef();

    const tilte = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = tilte.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(
            enteredTitle.trim() ==='' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''    
        ) {
            modal.current.open();
            return;
        }

        //validation ... ici on destructure l'objet pour ajouter directement les champs avec leurs clés dans la fonction
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })

    }

    return (
        <>
        <Modal ref={modal} buttonCaption="okay">
            <h2 className='text-xl font-bold text-stone-700 mt-4 mb-4'>Invalid input</h2>
            <p className='text-stone-600 mb-4'>Please enter a valid title, description and due date</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>cancel</button>
                </li>

                <li>
                <button className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={handleSave}
                >
                save</button>
                </li>

            </menu>
            <div>
                <Input type="text" label="Title" ref={tilte}/>
                <Input ty label="Description" textarea ref={description}/>
                <Input type="date" label="Due Date" ref={dueDate}/>
            </div>
        </div>
        </>
    );
}