export function validationQueryRationToNumber(queryRating: string) {
  let rating = parseInt(queryRating);;
  if (rating > 5 || rating < 1) {
    return false;
  }
  else {
    return true;
  }
}
