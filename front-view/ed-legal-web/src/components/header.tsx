import React from 'react'

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
                <nav className='flex justify-between items-center w-full p-4'>
                    <a href=""><img src="" alt="" /></a>
                    <ul className='flex gap-4'>
                        <li>INICIO</li>
                        <li>NOTICIAS</li>
                        <li>LEGISLACION</li>
                        <li>JURISPRUDENCIA</li>
                        <li>CONTACTO</li>
                    </ul>
                </nav>
            </header>
        </>    
    )
}

export default header
