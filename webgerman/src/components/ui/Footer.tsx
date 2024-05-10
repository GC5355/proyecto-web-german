import React from 'react'
import { Icons } from '../icons'
import Link from 'next/link'

const footer = () => {
  return (
    <div className='sticky bottom-0 grid grid-cols-4   bg-slate-100 border-2 drop-shadow-md py-4 pr-5'>
      <div className='flex pl-4 '>
        <span className='grow flex justify-center content-center'>ESP</span>
        <span className='grow flex justify-center content-center'>ENG</span>
      </div>

      <div className='flex space-x-4 col-start-4 justify-center content-center'>
        <Link target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/agus_pardo_motz/'>
          <svg className='hover:scale-125' width="20" height="20" viewBox="0 0 24 24" data-name="Layer 1"><path d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43 4.9 4.9 0 0 0-1.16-1.77 4.7 4.7 0 0 0-1.77-1.15 7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47 4.8 4.8 0 0 0-1.77 1.15 4.7 4.7 0 0 0-1.15 1.77 7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43 4.7 4.7 0 0 0 1.15 1.77 4.8 4.8 0 0 0 1.77 1.15 7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47 4.7 4.7 0 0 0 1.77-1.15 4.85 4.85 0 0 0 1.16-1.77 7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86 3.06 3.06 0 0 1-.75 1.15 3.2 3.2 0 0 1-1.15.75 5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3 3.3 3.3 0 0 1-1.1-.75 3 3 0 0 1-.74-1.15 5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34 3.06 3.06 0 0 1 1.19.8 3.1 3.1 0 0 1 .75 1.1 5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12 5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12 3.33 3.33 0 0 1 12 15.33" /></svg>
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/@agustinpardomotz405'>
          <svg className='hover:scale-125' width="20" height="20" viewBox="0 0 15 15" fill="none"><path d="m1.61 12.738-.104.489zm11.78 0 .104.489zm0-10.476.104-.489zm-11.78 0 .106.489zM6.5 5.5l.277-.416A.5.5 0 0 0 6 5.5zm0 4H6a.5.5 0 0 0 .777.416zm3-2 .277.416a.5.5 0 0 0 0-.832zM0 3.636v7.728h1V3.636zm15 7.728V3.636h-1v7.728zM1.506 13.227c3.951.847 8.037.847 11.988 0l-.21-.978a27.6 27.6 0 0 1-11.568 0zM13.494 1.773a28.6 28.6 0 0 0-11.988 0l.21.978a27.6 27.6 0 0 1 11.568 0zM15 3.636c0-.898-.628-1.675-1.506-1.863l-.21.978c.418.09.716.458.716.885zm-1 7.728a.905.905 0 0 1-.716.885l.21.978A1.905 1.905 0 0 0 15 11.364zm-14 0c0 .898.628 1.675 1.506 1.863l.21-.978A.905.905 0 0 1 1 11.364zm1-7.728c0-.427.298-.796.716-.885l-.21-.978A1.905 1.905 0 0 0 0 3.636zM6 5.5v4h1v-4zm.777 4.416 3-2-.554-.832-3 2zm3-2.832-3-2-.554.832 3 2z" fill="#000" /></svg>
        </Link>
        <a href='mailto:agustin.pardo@utec.edu.uy '>
          <svg className='hover:scale-125' width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671 18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z" fill="#0D0D0D" /></svg>
        </a>

        <Link target="_blank" rel="noopener noreferrer" href='https://open.spotify.com/intl-es/artist/1X2qrkyb7rO4HeIqraB5jM?si=uOg1bkneQbmGjbhIXWve7A'>
          <svg className='hover:scale-125' width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM1 7.5A6.5 6.5 0 0 1 7.5 1V0A7.5 7.5 0 0 0 0 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm-3.838 9.116c.986-.24 2.2-.345 3.392-.228 1.196.117 2.334.454 3.202 1.065l.575-.819c-1.053-.74-2.375-1.113-3.679-1.241a11.5 11.5 0 0 0-3.727.252zm-.336-2.124c3.446-.61 5.848-.297 7.839 1.132l.583-.813C9.45 6.661 6.732 6.374 3.152 7.008zm-.225-2.151c1.353-.478 3.003-.676 4.624-.544 1.623.133 3.18.595 4.364 1.4l.561-.828c-1.364-.927-3.099-1.426-4.843-1.568-1.746-.143-3.539.067-5.039.597z" fill="#000" /></svg>
        </Link>
      </div>
      <div>
      </div>
    </div>


  )
}

export default footer