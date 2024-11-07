import React from 'react'
import Link from 'next/link'
import { Mountain } from 'lucide-react'

function header() {
    return (
        <>
            <header>
{/*                 <div>
                    <ul>
                        <li>Saltar al menu</li>
                        <li>Saltar al contenido</li>
                    </ul>
                </div> */}
{/*                 <nav className='flex justify-between items-center w-full p-4'>
                    <a href=""><img src="" alt="" /></a>
                    <ul className='flex gap-4'>
                        <li>INICIO</li>
                        <li>NOTICIAS</li>
                        <li>LEGISLACION</li>
                        <li>JURISPRUDENCIA</li>
                        <li>CONTACTO</li>
                    </ul>
                </nav> */}
                <nav className="bg-background border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="flex items-center">
                            <Mountain className="h-8 w-8 text-primary" />
                            <span className="ml-2 text-xl font-bold">Logo</span>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Home</Link>
                            <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground">About</Link>
                            <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Services</Link>
                            <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Portfolio</Link>
                            <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Contact</Link>
                        </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>    
    )
}

export default header
