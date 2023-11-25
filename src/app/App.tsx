import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';

import './styles/index.scss';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter/>
    </div>
  )
}

export default App