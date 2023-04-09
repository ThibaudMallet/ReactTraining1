// == Import
import './styles.css';
import PropTypes from 'prop-types';

// == Composant
function ListItem({ item }) {
  return (
    <li className="main__list--item">{ item }</li>
  );
}

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
};

// == Export
export default ListItem;
