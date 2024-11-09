{
  /* -------------------------------------------- */

  function getProperty<T extends { name: string }, K extends keyof T>(
    object: T,
    key: K
  ): T[K] {
    return object[key];
  }

  /* -------------------------------------------- */
}
