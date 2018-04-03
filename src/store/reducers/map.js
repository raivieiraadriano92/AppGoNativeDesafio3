const initialState = {
  users: [
    {
      id: 1,
      name: 'Raí Vieira Adriano',
      bio: 'anmkasd m,asm d,asm ,asdm ,asm ,dasm ,d',
      avatar: '',
      coordinates: [
        -49.646445007028376,
        -27.21480273739938,
      ],
    },
    {
      id: 2,
      name: 'Teste 1',
      bio: 'as nkaskknasnjas ams d masd mas md ma,sd',
      avatar: '',
      coordinates: [
        -49.646322505190255,
        -27.213930855416407,
      ],
    },
  ],
};

export default function map(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state, action.payload.newUser],
      };
    default:
      return state;
  }
}