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
        <div>
            <h1>Home</h1>
            {planets.map((planet,i) => <Card data={planet}/>)}
            {peoples.map((people,i) => <Card data={people}/>)}
        </div>
    );
}

export default Home;