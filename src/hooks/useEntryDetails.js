import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import { closeEditModal } from "../actions/modals.actions";

function useEntryDetails(des = "", val = "", isExp = false) {
    const [description, setDescription] = useState(des);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);
    const dispatch = useDispatch();
    useEffect(() => {
        setDescription(des);
        setValue(val);
        setIsExpense(isExp);
    }, [des, val, isExp]);
    const updateEntry = (id) => {
        toast.success('Update succeed !')
        dispatch(
            updateEntryRedux(
                id,
                {
                    id,
                    description,
                    value,
                    isExpense
                }
            ),

        )
        dispatch(closeEditModal())
        resetValue();
    }
    const addEntry = async () => {
        if (description || value) {
            toast.success('Add new transaction succeed !')
            dispatch(addEntryRedux({
                id: uuidv4(),
                description,
                value,
                isExpense
            }));
            resetValue();
        } else {
            toast.error('Missing required parameter !')
        }
    }
    const resetValue = () => {
        setDescription('');
        setValue('');
        setIsExpense(false);
    }
    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry,
        updateEntry
    }
}

export default useEntryDetails