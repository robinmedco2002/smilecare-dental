import { FaTooth } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ id, title, description, image }) => {
  return (
    <Link
      to={`/services/${id}`}
      className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
    >
      <div className="relative h-44 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <FaTooth className="text-blue-600" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <span className="inline-block text-blue-600 font-medium">Learn more →</span>
      </div>
    </Link>
  );
};

export default ServiceCard;
