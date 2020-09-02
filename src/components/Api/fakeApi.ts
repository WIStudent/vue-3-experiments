let savedValue: string = '';

type Callback = (value: string) => void;

let savedCallback: Callback = () => {};

export function setValue(value: string) {
  console.log(`Set value to ${value}`);
  savedValue = value;
  savedCallback(value);
}

export function getValue(): string {
  return savedValue;
}


export function subscribe(callback: Callback) {
  savedCallback = callback;
}

export function unsubscribe() {
  savedCallback = () => {};
}