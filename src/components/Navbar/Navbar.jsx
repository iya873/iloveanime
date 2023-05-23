import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
	
  return (
		<nav >
			<ul className='nav justify-content-center'>
				<li className='nav-item'>
					<Link className='nav-link' to='/'>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/search'>
						Search
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link disabled' to='/details/:id'>
						Dashboard
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar