export function trimCharacters(text, lenght = 95) {
  if (!text) return "";
  return text.length > 95 ? text.slice(0, lenght) + "..." : text;
}
