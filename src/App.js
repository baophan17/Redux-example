import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const { isOpen, id } = useSelector(state => state.modals)
  const entries = useSelector(state => state.entries);
  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id])

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

      />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm


      />
      <ModalEdit
        isOpen={isOpen}
        {...entry}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
}

export default App;

