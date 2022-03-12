import "./bottom-menu.css"
import { Link } from 'react-router-dom'
function BottomMenu() {
   
    return (
      <div  
      className="menuBotton menuBotton-left">
          <div className="grid grid-rows-2 justify-items-center gap-3">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
              <span className="font-bold text-base hover:text-primary"><Link to="/quizzes">Quizz</Link></span>
              
          </div>
          <div className="grid grid-rows-2 justify-items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
              <span className="font-bold text-base hover:text-primary"><Link to="/filterrecipes">Recetas</Link></span>
          </div>
          <div className="grid grid-rows-2 justify-items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
              <span className="font-bold text-base hover:text-primary"><Link to="/favorite">Favoritos</Link></span>
          </div>
      </div>
    );
  }
  
  export { BottomMenu };