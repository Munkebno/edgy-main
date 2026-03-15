export async function getUsers() {
  const res = await fetch("/airtable");
  const data = await res.json();
  return data;
}
