const storage = {
  set: (key, value) => {
    localStorage.setItem(key, value)
  }
}

export default storage;