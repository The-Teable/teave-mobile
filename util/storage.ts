type StorageKey = "ACCESS_TOKEN";

const store = {
  ACCESS_TOKEN: "",
};

const storage = {
  get: (key: StorageKey) => store[key],
  set: ({ key, value }: { key: StorageKey; value: string }) =>
    (store[key] = value),
  remove: (key: StorageKey) => (store[key] = ""),
};

export { storage };
