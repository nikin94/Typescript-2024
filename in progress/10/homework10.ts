// Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.
// Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.
// Вам потрібно створити тип UpperCaseKeys, який буде приводити всі ключі до верхнього регістру.
// І саме цікаве. Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

type DeepRequireReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? DeepRequireReadonly<T[P]>
    : T[P]
}

type UpperCaseKeys<T> = {
  [P in keyof T as Uppercase<string & P>]: T[P]
}

type ObjectToPropertyDescriptor<T> = {
  [P in keyof T]: PropertyDescriptor
}
