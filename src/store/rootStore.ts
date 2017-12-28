
export interface Hello {
    name: string;
    age: number;
}

export interface RootState {
  hello: Hello;
}

export const rootState: RootState = {
    hello: {
        age: 30,
        name: 'name',
    },
};
