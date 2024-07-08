import { Link } from "react-router-dom"
const Card = ({ img, title, link}) => {
    return <>
        <div className="m-1 p-2 h-100 w-60 bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
            <img className="w-full h-32 lg:h-48 object-fit rounded" src={img} alt="Card image cap" />
            <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                    <h5 className="text-lg font-bold mb-2">{title}</h5>
                </div>
                <Link class="bg-blue-500 border-2- text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" to={link}>
                    Learn More
                </Link>
            </div>
        </div>
    </>
}
export default Card