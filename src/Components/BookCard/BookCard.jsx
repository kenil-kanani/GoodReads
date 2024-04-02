import BookImage from 'Assets/Images/book.jpg';
import { BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
export default function BookCard({ data }) {

    const navigate = useNavigate();

    return (
        <div className="rounded-lg shadow-2xl w-full flex p-4 mt-4 mb-4 max-md:flex-col max-md:items-center">
            <img
                src={BookImage}
                alt="Book cover"
                className="object-cover rounded-md"
                width={'200px'}
                height={'300px'}
            />
            <div className="p-6 m-auto">
                <h3 className='mb-2 text-base font-semibold line-clamp-2'>{data.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                    {data.description}
                </p>
                <div className="flex items-center justify-between gap-4 mt-4">
                    <div className="flex items-center gap-2">
                        <BiUser />
                        <span className="text-sm font-medium">{data.author?.name}</span>
                    </div>
                    <button
                        onClick={() => {
                            navigate("/book/description", { state: { ...data } });
                        }}
                        className="btn btn-primary">
                        More Details
                    </button>
                </div>
            </div>
        </div>
    );
}