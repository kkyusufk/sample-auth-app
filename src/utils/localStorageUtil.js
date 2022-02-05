class LocalStorageUtil {
    getItem = (key, defaultValue) => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
          } catch (error) {
            return defaultValue;
          }
    }

    setItem = (key, value) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error)
        }
    }
}

export const localStorageUtil = new LocalStorageUtil();