import { all, fork, spawn, call, put } from "redux-saga/effects";
// import ExampleSagas from './exampleSaga';

//https://redux-saga.js.org/docs/advanced/RootSaga.html
// Keep Everything Alive , Automatically restart sagas after crash
export default function* rootSaga(getState) {
  const sagas = [
      //ExampleSagas,
  ];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
			console.error(e);
          }
        }
      })
    )
  );
}
