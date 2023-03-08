export const formatNumberByBrowserLocale = (num:number) => {
    const result: string = new Intl.NumberFormat().format(num);
    return result;
};
