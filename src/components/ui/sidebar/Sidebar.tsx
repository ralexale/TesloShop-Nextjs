"use client"

import { IoCloseOutline, IoSearchOutline, } from 'react-icons/io5'
import clsx from 'clsx'
import Link from 'next/link'

import { optionsMenuData } from '@/utils'
import { useUiStore } from '@/store'



export const Sidebar = () => {

    const { isSideMenuOpen, closeSideMenu } = useUiStore()


    // const isSideMenuOpen = useUiStore(state => state.isSideMenuOpen)
    // const closeSideMenu = useUiStore(state => state.closeSideMenu)

    return (
        <aside>
            {
                isSideMenuOpen &&

                // background black and blur 
                <div className='fixed fade-in bg-black/30 backdrop-blur-sm  h-screen w-screen top-0 z-10'
                    onClick={closeSideMenu}
                />
            }


            {/* SideMenu */}
            <nav
                // todo: efecto de slide
                className={
                    clsx(
                        'fixed p-5 right-0 top-0 w-4/5 sm:w-1/2 lg:w-1/3  h-screen bg-white z-20 shadow-2xl transform transition-all duration-200',
                        { "translate-x-full": !isSideMenuOpen }
                    )
                }>
                <IoCloseOutline
                    size={50}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={closeSideMenu}

                />

                {/* input */}
                <div className='relative mt-14 flex items-center'>
                    <IoSearchOutline size={20} className="absolute left-2" />
                    <input type="text"
                        placeholder='Buscar'
                        className='w-full bg-gray-50 rounded pl-10 py-3 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-400'
                    />
                </div>

                {/* Opciones del Menú */}
                {
                    optionsMenuData.map((option, index) => (
                        <div key={index}>
                            <Link href={option.href} className='flex items-center mt-10 p-4 hover:bg-gray-100 rounded transition-colors'>
                                {option.icon}
                                <span className='ml-3 text-xl'>{option.title}</span>
                            </Link>
                            {/* Line separetor */}
                            {
                                index === 3 && <div className='w-full h-px bg-gray-200 my-10' />
                            }
                        </div>
                    ))
                }
            </nav>


        </aside>
    )
}
