export function updateObject(items, itemID) {
  return items.map((item) => {
    if (item.id === itemID) return { ...item, followed: !item.followed };
    return item;
  })
}
