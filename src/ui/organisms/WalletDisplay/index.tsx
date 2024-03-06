import React, { useReducer } from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.css';
/*===== Component imports =====*/
import Button from "../../atoms/Button";

type walletActions = {
  type: 'earn' | 'spend'
}
type walletStates = {
  money: number
}

const reducer = (state:walletStates, action: walletActions) => {
  switch (action.type) {
    case 'earn': return { money: state.money + 10 };
    case 'spend': return { money: state.money - 30 };
  }
}

function WalletDisplay() {
  const initState = { money: 150 };
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div id={styles.WalletDisplay}>
      <h2>Wallet: {state?.money}</h2>

      <div className={styles.WalletMods}>
        <Button
          text="Grinded and conned today!"
          onClick={() => dispatch({ type: 'earn' })}
        />
        <Button
          text="Wasted cash on a game"
          onClick={() => dispatch({ type: 'spend' })}
        />
      </div>
    </div>
  );
}

export default WalletDisplay;