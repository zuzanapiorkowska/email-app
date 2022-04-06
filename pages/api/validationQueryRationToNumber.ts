export function validationQueryRationToNumber(queryRating: string) {
  let rating = parseInt(queryRating);
  return (rating < 5 || rating > 1)
}
