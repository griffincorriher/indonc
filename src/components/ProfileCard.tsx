import { type Member } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export function ProfileCard({ seller, imageSrc }: { seller: Member, imageSrc: string }) {
    return (

<div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-center mb-4">
        <img src={imageSrc} alt="Seller" className="rounded-full w-24 h-24" />
    </div>
        <h1 className="flex flex-col justify-center items-center text-3xl font-bold mb-4">{seller.displayName}</h1>
    <div className="flex flex-col ml-8 mb-8">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mr-2" />
          <span className="text-gray-600">{seller.countyName} County</span>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faFacebook} className="text-blue-500 mr-2" />
          <a
            href={seller.facebook}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-2" />
          <span className="text-gray-600">{seller.phone}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
          <span>{seller.email}</span>
        </div>
        <div className="flex flex-row justify-end mr-8">
            <Link href={`/sellers/${seller.id}/products`}>
                <button type="button" className="text-gray-900 bg-gray-100 border hover:bg-blue-800 hover:text-gray-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View Products</button>
            </Link>
        </div>
    </div>
</div>

);
}
