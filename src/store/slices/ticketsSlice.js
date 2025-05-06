import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSearchId, fetchTicketsId } from '../../components/api/api';

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    error: null,
    loading: false,
    visibleCount: 5,
  },
  reducers: {
    increaseVisibleCount(state) {
      state.visibleCount += 5;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.tickets = [];
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Ошибка при получении билетов';
      });
  },
});

export const { increaseVisibleCount } = ticketsSlice.actions;
export default ticketsSlice.reducer;

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (_, { rejectWithValue }) => {
  try {
    const searchId = await fetchSearchId();

    let stop = false;
    let retryCount = 0;
    const MAX_RETRIES = 5;
    let allTickets = [];

    while (!stop && retryCount < MAX_RETRIES) {
      try {
        const data = await fetchTicketsId(searchId);

        const ticketsWithId = data.tickets.map((ticket, index) => ({
          ...ticket,
          id: `${Date.now()}_${index}`,
        }));

        allTickets.push(...ticketsWithId);
        stop = data.stop;
        retryCount = 0;
      } catch (err) {
        retryCount++;
        if (retryCount >= MAX_RETRIES) {
          return rejectWithValue('Ошибка загрузки билетов. Проверьте интернет.');
        }
        await new Promise((res) => setTimeout(res, 1000));
      }
    }

    return allTickets;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
