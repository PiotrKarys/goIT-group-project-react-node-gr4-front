import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { updateBalance } from '../../redux/Users/AuthOperations';

import { useAuth } from '../../hooks/useAuth';

import BalanceModal from '../BalanceModal/BalanceModal';

const Balance = () => {
  const dispatch = useDispatch();
  const form = useRef();
  const { user } = useAuth();

  const userBalance = user ? user.balance : null;
  let balanceValue;

  const handleSubmit = e => {
    e.preventDefault();
    const balanceValue = e.target.balance.value;
    console.log('Balance to update:', balanceValue);
    dispatch(updateBalance(balanceValue));
    form.current.reset();
  };

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <label>Balance</label>
        <div>
          <input
            type="number"
            name="balance"
            title="Please, enter your balance"
            value={balanceValue}
            step="0.01"
            placeholder={`${userBalance ? userBalance : '0.00'} USD`}
            required
          />
          <button type="submit">CONFIRM</button>
        </div>
      </form>
      {!userBalance && <BalanceModal />}
    </div>
  );
};

export default Balance;
