import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";

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
    const addEntry = async () => {
        if (description || value) {
            toast.success('Add new transaction succeed !')
            dispatch(addEntryRedux({
                id: uuidv4(),
                description,
                value,
                isExpense
            }));
            setDescription('');
            setValue('');
            setIsExpense(false);
        } else {
            toast.error('Missing required parameter !')

        }


    }
    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry
    }
}

export default useEntryDetails