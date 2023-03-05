export const isInteger = (value: number) => {
  return typeof +value === 'number' && Math.floor(+value) === +value
}
