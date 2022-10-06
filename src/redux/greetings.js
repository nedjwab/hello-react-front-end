import axios from 'axios';

const GET_GREETINGS = 'Hello-react-frontend/GET_GREETINGS';
const url = 'http://127.0.0.1:3000/api/v1/greetings';

export const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

export const fetchGreeting = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data;
  const greetings = [];
  try {
    data.forEach((el) => {
        greetings.push({
        message:el.message
      });
    });
    dispatch(getGreetings(greetings));
  } catch (error) {
    <h2>{error}</h2>;
  }
};

export default function greetingReducer(state = [], action) {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
}