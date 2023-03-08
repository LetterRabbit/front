import create from 'zustand';
import axios from 'axios';

// 쿠키에 저장된 사용자 세션 정보를 가져온다.
// _app.js 에서 호출하므로 URL 을 직접 입력하는 경우 항상 실행된다.

export const useUser = create<any>((set, get) => ({
  getUser: {
    login: false,
    isLoading: true,
  },

  requestAuthUser: async () => {
    const session = await axios.get('/api/session');

    set((state) => {
      const getUser = {
        ...state.getUser,
        ...session.data,
        isLoading: false,
      };

      return { ...state, getUser };
    });
  },
}));

export const useGetUser = () => {
  return useUser((state) => state.getUser);
};
