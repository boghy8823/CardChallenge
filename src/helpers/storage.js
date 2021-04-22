
const storage = {
    isLocalStorageSupported: function () {
      try {
        return "localStorage" in window && window.localStorage !== null;
      } catch (e) {
        return false;
      }
    },
  
    setItem: function (name, value) {  
      if (this.isLocalStorageSupported()) {
        localStorage.setItem(name, value);
      } else {
       // TODO: add cookie fallback
      }
    },
  
    getItem: function (name) {
      if (this.isLocalStorageSupported()) {
        const ret = localStorage.getItem(name);
  console.log("Item ", ret);
        switch (ret) {
          case "true":
            return true;
          case "false":
            return false;
          default:
            return ret;
        }
      } else {
        // TODO: add cookie fallback
      }
    },
    removeItem: function (name) {
        localStorage.removeItem(name);
    },
  };
  
  export default storage;
  