import { useUser } from "@clerk/nextjs"
export function ProductCard() {
    const user = useUser();
    return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" alt="" />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sate Ayam</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-6">One of the common recipes includes the meat marinated in sweet kecap manis soy sauce, before being skewered. I think is the main reason why Indonesian sate is so good, is because the skewers of meat are typically grilled on an extremely hot charcoal fire, so the meat cooks quickly, while leaving it smoky and juicy.</p>
        </div>
    </div>
    )}