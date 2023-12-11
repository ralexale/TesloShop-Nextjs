'use client'
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
    totalPages: number;

}

export const Pagination = ({ totalPages }: Props) => {

    const pathName = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) ?? 1


    const createPageUrl = (pageNumber: number | string) => {

        const params = new URLSearchParams(searchParams)


        if (pageNumber === '...') {
            return `${pathName}?${params.toString()}`
        }

        if (+pageNumber === 0) {
            return `${pathName}` // hrfe={"/kid"}
        }

        if (+pageNumber > totalPages) { // Next
            return `${pathName}?${params.toString()}`
        }


        params.set('page', pageNumber.toString())
        return `${pathName}?${params.toString()}`
    }

    return (
        <div className="flex text-center justify-center  mt-10 mb-24">

            <nav aria-label="Page navigation example">
                <ul className="flex items-center justify-center list-style-none">

                    <li className="page-item">
                        <Link
                            className={`page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800  focus:shadow-none
                            ${currentPage === 1 && 'pointer-events-none  text-gray-400 '}
                            
                            `}
                            href={createPageUrl(currentPage - 1)}><IoChevronBackOutline size={30} />
                        </Link>
                    </li>

                    {
                        Array.from({ length: totalPages }).map((link, index) => (
                            <li key={index} className="page-item">
                                <Link
                                    className={`page-link relative block py-1.5 px-3  border-0  outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none
                                    ${currentPage === (index + 1) && 'bg-blue-600 hover:bg-blue-600  text-white hover:text-white shadow-md focus:shadow-md'}
                                `}
                                    href={createPageUrl(index + 1)}>{index + 1}
                                </Link>
                            </li>
                        ))
                    }



                    <li className="page-item">
                        <Link

                            className={`page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none
                                ${currentPage === totalPages && 'pointer-events-none  text-gray-400 '}
                            `}
                            href={createPageUrl(currentPage + 1)}><IoChevronForwardOutline size={30} />
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}