export const buildQueryString = (
  data: Record<string, string | number | undefined>
) => {
  let queryString = "?";

  if (!data) {
    return "";
  }

  Object.keys({ ...data }).forEach((filterKey, index) => {
    const filterValue = (data as Record<string, string | number>)[filterKey];

    if (!filterValue) {
      return;
    }

    if (index !== 0) {
      queryString += "&";
    }

    queryString += `${filterKey}=${filterValue}`;
  });

  return queryString;
};
