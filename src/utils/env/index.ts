const currEnv = (import.meta as any).env.MODE;

export const isProd = currEnv == "production";
export const isTest = currEnv == "test";
export const isDev = currEnv == "development";
