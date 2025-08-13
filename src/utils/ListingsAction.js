export const ListingsAction = async ({ request }) => {
  const formData = await request.formData();
  const maxPrice = Number(formData.get("maxPrice"));
  const beds = Number(formData.get("beds"));
  const state = formData.get("state");
  const size = Number(formData.get("size"));
  const parks = Number(formData.get("parks"));

  return { maxPrice, beds, state, size, parks };
};
