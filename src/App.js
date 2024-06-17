import { useReducer } from 'react';

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TG_COLOR: 'tgColor'
}

//Not 1:
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.NEW_USER_INPUT:
      return { ...state, userInput: action.payload };
    case ACTION.TG_COLOR:
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
}

function App() {

  //Not 2:
  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false })

  return (
    <main className="App" style={{ color: state.color ? '#FFF' : '#FFF952' }}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) => dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })}
      />
      <br /><br />
      <p>Count : {state.count}</p>
      <section>
        <button onClick={(() => dispatch({ type: ACTION.DECREMENT }))}>-</button>
        <button onClick={(() => dispatch({ type: ACTION.INCREMENT }))}>+</button>
        <button onClick={(() => dispatch({ type: ACTION.TG_COLOR }))}>Color</button>
      </section>
      <br /><br />
      <p>User Input : {state.userInput}</p>
    </main>
  );
}


export default App;


//Not 1*
//INCREMENT ve DECREMENT eylemleri state.count değerini artırır veya azaltır. 
//Bu eylemlerin payload kısmına ihtiyaç yoktur, çünkü yapmaları gereken işlem basitçe sayıyı artırmak veya azaltmaktır.

//NEW_USER_INPUT eylemi, state.userInput değerini günceller. 
//Bu eylemin, kullanıcıdan alınan yeni girdiyi taşıması gerektiği için payload kısmı vardır. 

//TG_COLOR eylemi, state.color değerini tersine çevirir (true ise false, false ise true yapar). 
//Bu eylemin payload kısmına ihtiyacı yoktur çünkü sadece mevcut değeri tersine çevirmesi yeterlidir.


//Not 2*
//const[state, dispatch] =useReducer(reducer, initialState)
//state: Mevcut durum
//dispatch: Eylemleri reducer'a gondermek icin kullanilir.
//reducer: Durumun nasil güncellenecegini gosteren fonksiyondur.
////       reducer fonksiyonu; (state, action) olmak üzere iki argüman alir.
//initialState:Durumun baslangic degeridir.