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
                    {store.peoples.map((people, i) => <div className="col-md-3"><Card data={people} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM01QOS1X1N5Q0l7x4-aMrpcpGXNXegxanuZ53eL6fZRX2IQ8ILTyV_Uy4eRpbKrzrpg&usqp=CAU" /></div>)}
                </div>
            </div>
            <div className="row">
                <h1>Planets</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-2 mb-3">
                    {store.planets.map((planet, i) => <div className="col-md-3"><CardPlanets data={planet} image="https://images.unsplash.com/photo-1545156521-77bd85671d30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" /></div>)}
                </div>
            </div>
            <div className="row">
                <h1>Vehicles</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-2 mb-3">
                    {store.vehicles.map((vehicle, i) => <div className="col-md-3"><CardVehicles data={vehicle} image="https://images.unsplash.com/photo-1578374173713-32f6ae6f3971?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" /></div>)}
                </div>
            </div>
        </>
    );
}

export default Home;