import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { LandingPage } from './pages/landing/LandingPage';
import { FieldPage } from './pages/field/FieldPage';
import { CoopPage } from './pages/coop/CoopPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/field" element={<FieldPage/>}/>
        <Route path="/coop" element={<CoopPage/>}/>

        <Route path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>Page not found</p>
                    </main>
                }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
