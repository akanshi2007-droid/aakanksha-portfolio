/** Load a JSON file from src/data (path is resolved relative to this module). */
export async function loadData(name) {
  const url = new URL(`../data/${name}.json`, import.meta.url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not load ${name}.json (${res.status})`);
  return res.json();
}
