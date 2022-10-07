const GET_GREETINGS = 'Hello-react-frontend/GET_GREETINGS';
const url = 'http://localhost:3001/api/v1/greetings';

export const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

const head = {
  method: 'GET',
  mode: 'no-cors',
  cache: 'no-cache',
};

export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch(url, head);
  const data = await response.json();
  dispatch(getGreetings(data));
};

export default function greetingReducer(state = [], action) {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
}
