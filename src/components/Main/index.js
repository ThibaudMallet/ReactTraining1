// == Import
import './styles.css';
import ListItem from './ListItem';

// == Composant
function Main() {
  return (
    <main className="main">
      <h2 className="main__title">Titre du main</h2>
      <p className="main__text">Liste de courses dans main</p>
      <ul className="main__list">
        <ListItem item="farine" />
        <ListItem item="lait" />
        <ListItem item="oeuf" />
      </ul>
    </main>
  );
}

// == Export
export default Main;
