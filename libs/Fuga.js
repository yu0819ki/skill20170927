import Hoge from './Hoge';

export default class Fuga extends Hoge{
  thenEcho(promise) {
    promise.then((value) => {
      console.log(value);
    })
  }
}
