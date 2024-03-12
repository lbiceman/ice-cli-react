import { create } from "zustand";
import { persist } from "zustand/middleware";

type Info = Record<string, any> | null;

interface UserState {
	userInfo: Info;
	setUser: (info: Info) => void;
}

const useUserStore = create<UserState>()(
	persist(
		set => ({
			userInfo: null,
			setUser: info => set(() => ({ userInfo: info }))
		}),
		{
			name: "userInfo"
		}
	)
);

export default useUserStore;
