import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import CardPlanets from '../components/CardPlanets';
import CardVehicles from '../components/CardVehicles';

const Home = () => {
    const [planets, setPlanets] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        fetch("https://swapi.dev/api/planets/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPlanets(data.results))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        fetch("https://swapi.dev/api/people/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPeoples(data.results))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        fetch("https://swapi.dev/api/vehicles/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setVehicles(data.results))
            .catch(error => console.log(error))
    }, [])

   /* myarray = [
        {planetz: planets},
        {peoplez: peoples},
        {vehiclez: vehicles}
    ]*/
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
                    {planets.map((planet, i) => <div className="col-md-3"><CardPlanets data={planet} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>
            <div className="row">
                <h1>Vehicles</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-2 mb-3">
                    {vehicles.map((vehicle, i) => <div className="col-md-3"><CardVehicles data={vehicle} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>
        </>
    );
}

export default Home;