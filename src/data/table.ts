export interface IRows {
  id: number;
  checked: boolean;
  name: string;
  age: number;
  dateOfBirth: Date;
  bio: string;
}

export const data: IRows[] = [
  {
    id: 0,
    checked: false,
    name: 'Marek',
    age: 23,
    dateOfBirth: new Date(2000, 5, 2),
    bio: 'asdasd',
  },
  {
    id: 1,
    checked: false,
    name: 'Andrzej',
    age: 43,
    dateOfBirth: new Date(1990, 5, 2),
    bio: 'asdasd',
  },
  {
    id: 2,
    checked: false,
    name: 'Kacper',
    age: 13,
    dateOfBirth: new Date(2002, 7, 12),
    bio: 'uiouiouiououio',
  },
  {
    id: 3,
    checked: false,
    name: 'Robert',
    age: 33,
    dateOfBirth: new Date(2004, 8, 8),
    bio: 'cbvcvbcvbcbcvbcbvcvbcvbcbcvbcbvcvbcvbcbcvbcbvcvbcvbcbcvbcbvcvbcvbcbcvbcbvcvbcvbcbcvbcbvcvbcvbcbcvbcbvcvbcvbcbcvbcbvcvbcvbcbcvbcbvcvbcvbcbcvbcbvcvbcvbcbcvbcbvcvbcvbcbcvb',
  },
];
