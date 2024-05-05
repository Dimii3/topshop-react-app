import { redirect } from "react-router-dom";
import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING } from "../contants/api";
import { CATEGORIES } from "../contants/categories";
export function productListLoader({
  params: { gender, category, subcategory },
}) {
  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];

  if (foundGender && foundCategory) {
    let url = `${BACKEND_URL}/products/?gender=${foundGender}&category=${foundCategory}`;

    if (subcategory) {
      const foundSubcategory = foundCategory.subcategories.find(
        (sc) => sc.path === subcategory
      );
      if (foundSubcategory) {
        url = `${url}&subcategory=${subcategory}`;
      } else {
        return redirect("/kobieta");
      }
    }

    return fetch(url);
  } else {
    redirect("/kobieta");
  }
}
