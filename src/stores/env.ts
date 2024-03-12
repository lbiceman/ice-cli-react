import { create } from "zustand";
import { persist } from "zustand/middleware";
import { envList } from "@/config/index";

type Info = Record<string, any> | null;

interface EnvState {
	currEnv: string;
	currEnvObj: Info;
	setCurrent: (info: string) => void;
}

const getCurrModule = (env: string) => {
	return envList.filter(item => item.env == env)[0];
};

const useEnvStore = create<EnvState>()(
	persist(
		set => ({
			currEnv: "",
			currEnvObj: null,
			setCurrent: data => {
				set(() => {
					return {
						currEnv: data,
						currEnvObj: getCurrModule(data)
					};
				});
			}
		}),
		{
			name: "envInfo"
		}
	)
);

export default useEnvStore;
