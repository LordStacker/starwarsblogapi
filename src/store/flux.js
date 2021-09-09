export const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {
            planets: [],
            peoples: [],
            vehicles: [],
            details: {}
        },
        actions: {
            getPlanets: () => {
                fetch("https://swapi.dev/api/planets/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ planets: data.results }))
            },
            getPeoples: () => {
                fetch("https://swapi.dev/api/people/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ peoples: data.results }))
            },
            getVehicles: () => {
                fetch("https://swapi.dev/api/vehicles/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ vehicles: data.results }))
            },
            getDetailPlanet: (a) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/planets/' + a;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },
            getDetailCharacter: (a) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/people/' + a;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },
            getDetailVehicles: (a) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/vehicles/' + a;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },

            getData: (data) => {
                setStore({ details: data })
            }
        },
    };
};