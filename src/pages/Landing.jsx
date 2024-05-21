import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";
// react query
const featuredProductsQuery = (url) => {
  return {
    queryKey: ["featuredProducts"],
    queryFn: () => customFetch.get(url),
  };
};

export const loader = (queryClient) => async () => {
  const url = "/products?featured=true";
  try {
    const response = await queryClient.ensureQueryData(
      featuredProductsQuery(url)
    );
    const products = response.data.data;
    return { products };
  } catch (err) {
    const errorMessage =
      err?.response?.data?.error?.message ||
      "there was an error while accessing featuredProducts";
    toast.error(errorMessage);
    if (err?.response?.status === 401 || 403) return redirect("/login");
    return null;
  }
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
