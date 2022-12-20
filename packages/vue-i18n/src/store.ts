const useLocaleStore = (slug: string) => {
  const key = `${slug}.locale`;

  const getLocale = (): string | undefined => {
    const locale = localStorage.getItem(key);

    return locale ? locale : undefined;
  };

  const setLocale = (locale: string | undefined): void => {
    if (!locale) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, locale);
    }
  };

  return { getLocale, setLocale };
};

export default useLocaleStore;
