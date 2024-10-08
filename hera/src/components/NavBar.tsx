import { NavLink } from 'react-router-dom';

interface NavBarProps {
  showLinks?: boolean; // Prop opzionale per controllare la visibilità dei link
}

const NavBar: React.FC<NavBarProps> = ({ showLinks = true }) => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex space-x-4">
        {showLinks && (
          <>
            <NavLink to="/" className="font-bold hover:underline" style={{ color: '#D4AF37' }}>HOME</NavLink>
            <NavLink to="/ville" className="hover:underline" style={{ color: '#D4AF37' }}>VILLE</NavLink>
            <NavLink to="/sale" className="hover:underline" style={{ color: '#D4AF37' }}>SALE</NavLink>
            <NavLink to="/dimore" className="hover:underline" style={{ color: '#D4AF37' }}>DIMORE</NavLink>
            <NavLink to="/catering" className="hover:underline" style={{ color: '#D4AF37' }}>CATERING</NavLink>
          </>
        )}
      </div>
      <div className="flex space-x-2">
        <button className="text-white px-4 py-2 rounded-md" style={{ backgroundColor: '#D4AF37' }}>
        <a href='/login'>Login</a>

        </button>
        <button className="border px-4 py-2 rounded-md" style={{ color: '#D4AF37', borderColor: '#D4AF37' }}>
          <a href='/signUp'>SignUp</a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
