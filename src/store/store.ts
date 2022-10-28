import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemon";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;