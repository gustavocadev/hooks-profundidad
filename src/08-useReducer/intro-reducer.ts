console.log('hello world');

const initialState = [
  {
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
  },
];

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
  }
  return state;
};

export {};
