export const InteractivePath = (path) => {
  if (path.startsWith("http")) return path;

  if (!path.startsWith("/")) path = "/" + path;

  return `https://interactive.theguidon.com${path}`;
};
