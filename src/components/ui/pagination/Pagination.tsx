'use client'
import { generatePaginationNumbers } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
    totalPages: number;

}

export const Pagination = ({ totalPages }: Props) => {

    // obtener la ruta y el valor del parametro page
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const pageString = searchParams.get('page') ?? 1

    // obtener y validar la ruta de la página actual
    let currentPage = isNaN(+pageString) ? 1 : +pageString;
    const allPages = generatePaginationNumbers(currentPage, totalPages)

    if (currentPage < 1 || isNaN(+pageString)) {
        redirect(pathName)
    }

    // crear en enlace de redireccion de cada link 
    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams)

        if (+pageNumber <= 0) {
            return `${pathName}`
        }

        if (pageNumber === '...') {
            return `${pathName}?${params.toString()}`
        }

        if (+pageNumber > totalPages) {
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
                            ${currentPage === 1 && 'pointer-events-none  text-gray-300 '}
                            
                            `}
                            href={createPageUrl(currentPage - 1)}><IoChevronBackOutline size={30} />
                        </Link>
                    </li>

                    {
                        allPages?.map((page, index) => (

                            <li key={page + '-' + index} className="page-item">
                                <Link
                                    className={clsx("page-link relative block py-1.5 px-3  border-0  outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                                        {
                                            'bg-blue-600 hover:bg-blue-700  text-white hover:text-white': page === currentPage
                                        }
                                    )}
                                    href={createPageUrl(page)}>{page}
                                </Link>
                            </li>
                        ))
                    }

                    <li className="page-item">
                        <Link

                            className={`page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none
                                ${currentPage === totalPages && 'pointer-events-none  text-gray-300 '}
                            `}
                            href={createPageUrl(currentPage + 1)}><IoChevronForwardOutline size={30} />
                        </Link>
                    </li>

                </ul>
            </nav>
        </div >
    )
}