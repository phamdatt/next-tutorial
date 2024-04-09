import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = AsyncStorage;

async function saveData(key: string, value: any) {
  await storage.setItem(key, JSON.stringify(value));
}
async function getData(key: string) {
  let result = await storage.getItem(key);
  if (!result) {
    return null;
  }
  return JSON.parse(result);
}

async function removeData(key: string) {
  await storage.removeItem(key);
}

async function removeAllData() {
  await storage.clear();
}

export { saveData, getData, removeData, removeAllData };
