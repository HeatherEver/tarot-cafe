import { Link, Outlet } from "react-router-dom"


export const Root = () => {

    return <>
    <div className="nav-links">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/majorArcana" className="nav-link">Major Arcana</Link>
    <Link to="/suits" className="nav-link">Tarot Suits</Link>
    <Link to="/reading" className="nav-link">Reading</Link>
    <Link to="/blog" className="nav-link">Blog</Link>
    </div>
    <div> <Outlet /> </div>
    </>
}