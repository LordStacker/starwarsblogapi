import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';
import Card from '../components/Card';
import CardPlanets from '../components/CardPlanets';
import CardVehicles from '../components/CardVehicles';

const Home = () => {
    //using flux
    const { store, actions } = useContext(Context);
    //States
    useEffect(() => {
        actions.getPlanets();
    }, [])
    useEffect(() =>{
        actions.getPeoples();
    }, [])
    useEffect(() =>{
        actions.getVehicles();
    }, [])

    return (
        <>
            <div className="row">
                <h1>Characters</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-2 mb-3">
                    {store.peoples.map((people, i) => <div className="col-md-3"><Card data={people} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>
            <div className="row">
                <h1>Planets</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-2 mb-3">
                    {store.planets.map((planet, i) => <div className="col-md-3"><CardPlanets data={planet} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>
            <div className="row">
                <h1>Vehicles</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-2 mb-3">
                    {store.vehicles.map((vehicle, i) => <div className="col-md-3"><CardVehicles data={vehicle} image="https://isccoquimbo.cl/images/400X200.gif" /></div>)}
                </div>
            </div>
        </>
    );
}

export default Home;