import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

export const routes = [
    { path: '', component: Landing },
    { path: '/portfolio', component: Portfolio },
    { path: '/resume', component: Resume },
    { path: '/contact', component: Contact}
]