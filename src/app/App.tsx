import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "../shared/lib/classNames/classNames";
import './styles/index.scss'
import {Link} from "react-router-dom";
import AppRoute from "./providers/router/ui/AppRoute";

function App() {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>HomePage</Link>
            <Link to={'/discover'}>DiscoverPage</Link>
            <AppRoute/>
        </div>
    )
}

export default App
