export enum ActionTypes {
    SET_NAME = 'SET_NAME',
    SET_AGE = 'SET_AGE',
};

interface SET_NAME {
    type: ActionTypes.SET_NAME;
    name: string;
}

interface SET_AGE {
    type: ActionTypes.SET_AGE;
    age: number;
}

  export type Actions = SET_NAME | SET_AGE;
