import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {
    const [planets, setPlanets] = useState([]);
    const [peoples, setPeoples] = useState([]);
    useEffect(() => {
        fetch("https://swapi.dev/api/planets/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPlanets(data.results))
    }, [])
    useEffect(() => {
        fetch("https://swapi.dev/api/people/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPeoples(data.results))
    }, [])
    return (
        <>
            <div className="row">
                <h1>Characters</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-2 mb-3">
                    {peoples.map((people, i) => <div className="col-md-3"><Card data={people} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>
            <div className="row">
                <h1>Planets</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-2 mb-3">
                    {planets.map((planet, i) => <div className="col-md-3"><Card data={planet} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>
        </>
    );
}

export default Home;