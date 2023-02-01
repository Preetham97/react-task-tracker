import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';
import Button from './Button'

const Header = ({title, onAdd, showAddTask}) => {
    const onClick =() =>{
        console.log("I clikced Header Button");
       // onAdd;
    }
    const location = useLocation();
  return (
    <header className = 'header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button 
      onClick = {onAdd} 
      color = {showAddTask? 'red': 'green'} 
      text = {showAddTask? 'Close': 'Add a Task +'} 
      />}
    </header>
  )
}

Header.defaultProps = {
    title : "Default Title",
}

Header.propTypes = {
    title: PropTypes.string,
}

// css in JS.
const  HeaderStyle= {
    color: 'red', 
    backgroundColor: 'pink'
}

export default Header



