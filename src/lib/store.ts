import axios from 'axios';
import { useLayoutEffect } from 'react';
import create from 'zustand';
import createContext from 'zustand/context';

let store;

const initialState = () => ({
  getUser: {
    login: false,
    isLoading: true,
  },
});

const zustandContext = createContext();

export const Provider = zustandContext.Provider;
// An example of how to get types
/** @type {import('zustand/index').UseStore<typeof initialState>} */
export const useStore = zustandContext.useStore;

export const initializeStore = (preloadedState = {}): any => {
  return create((set, get) => ({
    ...initialState(),
    ...preloadedState,
    requestAuthUser: async () => {
      const session = await axios.get('/api/auth/session');
      console.log('session', session);

      set((state) => {
        const getUser = {
          ...state.getUser,
          ...session.data,
          isLoading: false,
        };

        return { ...state, getUser };
      });
    },
    // tick: (lastUpdate, light) => {
    //   set({
    //     lastUpdate,
    //     light: !!light,
    //   });
    // },
    // increment: () => {
    //   set({
    //     count: get().count + 1,
    //   });
    // },
    // decrement: () => {
    //   set({
    //     count: get().count - 1,
    //   });
    // },
    // reset: () => {
    //   set({
    //     count: initialState().count,
    //   });
    // },
  }));
};

export function useCreateStore(serverInitialState) {
  // Server side code: For SSR & SSG, always use a new store.
  if (typeof window === 'undefined') {
    return () => initializeStore(serverInitialState);
  }
  // End of server side code

  // Client side code:
  // Next.js always re-uses same store regardless of whether page is a SSR or SSG or CSR type.
  const isReusingStore = Boolean(store);
  store = store ?? initializeStore(serverInitialState);
  // When next.js re-renders _app while re-using an older store, then replace current state with
  // the new state (in the next render cycle).
  // (Why next render cycle? Because react cannot re-render while a render is already in progress.
  // i.e. we cannot do a setState() as that will initiate a re-render)
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment (i.e. client or server)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    // serverInitialState is undefined for CSR pages. It is up to you if you want to reset
    // states on CSR page navigation or not. I have chosen not to, but if you choose to,
    // then add `serverInitialState = getDefaultInitialState()` here.
    if (serverInitialState && isReusingStore) {
      store.setState(
        {
          // re-use functions from existing store
          ...store.getState(),
          // but reset all other properties.
          ...serverInitialState,
        },
        true // replace states, rather than shallow merging
      );
    }
  });

  return () => store;
}
