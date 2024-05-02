import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState()
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];

      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpense += Number(entry.value);
      }
      return totalIncome += Number(entry.value);
    });
    setTotal(totalIncome - totalExpense);
    setExpenseTotal(totalExpense);
    setIncomeTotal(totalIncome);
  }, [entries])


  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }
  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value: value,
      isExpense,
    });
    setEntries(result);
    resetEntry();
  }
  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }
  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(false);
  }
  return (
    <Container>
      <MainHeader title='budget' type='h1' />
      <DisplayBalance
        size='small'
        title='Your Balance: '
        value={total}
      />
      <DisplayBalances
        incomeTotal={incomeTotal}
        expenseTotal={expenseTotal}
      />
      <MainHeader title='History' type='h3' />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000,
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water bill',
    value: 223,
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: 598,
    isExpense: false,
  },
  {
    id: 4,
    description: 'Power bill',
    value: 3211,
    isExpense: true,
  }
]