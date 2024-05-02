import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm';

function ModalEdit(props) {
    const {
        isOpen,
        setIsOpen,
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense
    } = props;
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={description}
                    setDescription={setDescription}
                    value={value}
                    setValue={setValue}
                    isExpense={isExpense}
                    setIsExpense={setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit