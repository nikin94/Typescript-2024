// 1 - Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.
// 2 - Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
// 3 - Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
// 4 - Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
// 5 - Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
// 6 - Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

// 1
interface I1 {
  [key: string]: number | string
}

// 2
interface I2 {
  [key: string]: (...args: any[]) => any
}

// 3
interface I3 {
  [key: number]: string
}

// 4
interface I4 {
  name: string
  [key: string]: any
}

// 5
interface I5 {
  [key: string]: any
}

interface I6 extends I5 {
  name: string
}

// 6
function check(obj: I5): boolean {
  return Object.values(obj).every(el => typeof el === 'number')
}