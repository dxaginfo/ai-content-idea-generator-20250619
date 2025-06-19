import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Idea {
  id: string;
  title: string;
  description: string;
  type: string;
  keywords: string[];
  status?: string;
  scheduledDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface IdeasState {
  ideas: Idea[];
  loading: boolean;
  error: string | null;
}

const initialState: IdeasState = {
  ideas: [],
  loading: false,
  error: null,
};

export const ideasSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    fetchIdeasStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchIdeasSuccess: (state, action: PayloadAction<Idea[]>) => {
      state.ideas = action.payload;
      state.loading = false;
    },
    fetchIdeasFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addIdea: (state, action: PayloadAction<Idea>) => {
      state.ideas.push(action.payload);
    },
    updateIdea: (state, action: PayloadAction<Idea>) => {
      const index = state.ideas.findIndex(idea => idea.id === action.payload.id);
      if (index !== -1) {
        state.ideas[index] = action.payload;
      }
    },
    deleteIdea: (state, action: PayloadAction<string>) => {
      state.ideas = state.ideas.filter(idea => idea.id !== action.payload);
    },
  },
});

export const {
  fetchIdeasStart,
  fetchIdeasSuccess,
  fetchIdeasFailure,
  addIdea,
  updateIdea,
  deleteIdea,
} = ideasSlice.actions;

export default ideasSlice.reducer;
