import Hoge from './libs/Hoge';
import Lib from './libs/index.js';
const Fuga = Lib.Fuga;
const hoge = new Hoge();
const fuga = new Fuga();
hoge.echo();
fuga.echo();

const sleepPromise = (sec, next) => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
    .then(() => next);
}
const promise = sleepPromise(2, 100);
fuga.thenEcho(promise);
console.log('nya-');

