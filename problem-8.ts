{
  /* -------------------------------------------- */

  function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    let isValidKeys = true;
    for (let key of keys) {
      if (!obj[key]) {
        isValidKeys = false;
      }
    }
    return isValidKeys;
  }

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  // console.log(validateKeys(person, ["name", "age"]));

  /* -------------------------------------------- */
}
