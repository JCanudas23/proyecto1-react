import "./filters.css"
import { getCategories } from "../../asyncMock.js"
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Filters = () => {
  const [categories, setCategories] = useState([])

  console.log({ categories })

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories))
  }, [])

  const isActive = true;

  return (
    <nav className="filtros">
      {categories.map(({ id, name }) => (
        <NavLink key={id} end to={`/category/${id}`} className={`filtroNav ${isActive ? 'active' : ''}`}>
          {name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Filters
