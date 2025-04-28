import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchId, fetchTicketsId } from '../../components/api/api';

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [], //Пока пустой массив билетов
    error: null, //Пока нет ошибок
    loading: false, //Пока загрузка не идет
  },
  reducers: {
    // Начало запроса (ставлю загрузку в true, начала загружать билеты)
    fetchTicketsStart(state) {
      state.error = null;
      state.loading = true;
    },
    // Если ошибка при запросе
    fetchTicketsError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    // Если все успешно сохраняю билеты в состояние
    fetchTicketsLoading(state, action) {
      state.loading = false;
      state.tickets = action.payload;
    },
  },
});

export const { fetchTicketsStart, fetchTicketsError, fetchTicketsLoading } = ticketsSlice.actions;
export default ticketsSlice.reducer;

export const fetchTickets = () => async (dispatch) => {
  try {
    dispatch(fetchTicketsStart()); // начала загрузку

    const searchId = await fetchSearchId(); // Получила id

    let tickets = []; // Сюда буду собирать билеты
    let stop = false; // Пока сервер не скажет все

    while (!stop) {
      try {
        // Крутимся в цикле, пока сервер шлет билеты
        const dataTickets = await fetchTicketsId(searchId);
        tickets = [...tickets, ...dataTickets.tickets]; // Складываю новые билеты
        stop = dataTickets.stop; // Проверяю, не конец ли
      } catch (error) {
        // Если ошибка - повторяю запрос еще раз
        console.log('Произошла ошибка при получении билетов, повторяю запрос', error);
      }
    }

    dispatch(fetchTicketsLoading(tickets)); // Сохраняю все билеты в Redux
  } catch (error) {
    dispatch(fetchTicketsError(error.message)); // Если ошибка 
  }
};
