export const buildQueryString = (
  data?: Record<string, string | number | undefined>
) => {
  if (!data) {
    return "";
  }

  const queryParts = Object.entries(data)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value!)}`
    );

  return `?${queryParts.join("&")}`;
};
