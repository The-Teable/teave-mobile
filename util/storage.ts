// 임시 저장소

const STORAGE_KEY = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  USER_ID: "USER_ID",
} as const;

const temp: any = {};

const storage = {
  get: (key: string) => temp[key],
  set: ({ key, value }: { key: string; value: string }) => {
    temp[key] = value;
    return null;
  },
  remove: (key: string) => {
    delete temp[key];
    return null;
  },
};

export { STORAGE_KEY, storage };
