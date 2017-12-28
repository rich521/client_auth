export enum ActionTypes {
    SetName = 'SET_NAME',
    SetAge = 'SET_AGE',
};

interface SetName {
    type: ActionTypes.SetName;
    name: string;
}

interface SetAge {
    type: ActionTypes.SetAge;
    age: number;
}

  export type Actions = SetName | SetAge;
