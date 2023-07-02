import { useUser } from "@clerk/nextjs"
export function SellerItemCard() {
    const user = useUser();
    return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sate Ayam</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-6">One of the common recipes includes the meat marinated in sweet kecap manis soy sauce, before being skewered. I think is the main reason why Indonesian sate is so good, is because the skewers of meat are typically grilled on an extremely hot charcoal fire, so the meat cooks quickly, while leaving it smoky and juicy.</p>
            </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ayam Bakar Taliwang</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-6">The chicken itself was so flavorful, and not too tender, but with just enough texture so that with every bite it kept releasing more chicken juices, kind of like that crazily juicy chicken I ate in Osaka. But along with just being a flavorful chicken from the start, it was beautifully spicy. Ayam Bakar Taliwang is one of the dishes you don’t want to miss if you love spicy food.</p>
            </div>
        </div>
    </div>
    )}