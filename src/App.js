import './App.css';
import Card from './Card';
import mern from "./imges/mern.png"
import mean from "./imges/mean.png"
import flutter from "./imges/flutter.jpg"
import laravel from "./imges/laravel.png"
import pern from "./imges/pern.webp"
function App() {
    return (
        <div className="App p-2">
            {/* nav bar */}
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Education Portal</span>
                <span class="navbar-brand mb-0 h1">Top 5 Full Stack Technologies</span>
            </nav>
            {/* nav end */}
            <div className="w-screen p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center items-center">
                    <Card img={mern} title={"MERN Stack"} link={"/mern"} />
                    <Card img={mean} title={"MEAN Stack"} link={"mean"} />
                    <Card img={flutter} title={"Flutter"} link={"/flutter"} />
                    <Card img={pern} title={"PERN Stack"} link={"/pern"} />
                    <Card img={laravel} title={"Laravel"} link={"/laravel"} />
                </div>
            </div>
        </div >
    );
}

export default App;
