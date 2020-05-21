export default class SwapiService {
    _baseApiURL = 'https://swapi.dev/api';
    async getResourses (url) {
        const res = await fetch(`${this._baseApiURL}${url}`);

        if (!res.ok) {
            throw new Error(`couldn't fetch ${url}, error ${res.status} `)
        }
        return await res.json();
    }
    getAllPeople = async () => {
        const res = await this.getResourses(`/people/`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResourses(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getResourses(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResourses(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResourses(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = this.getResourses(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    _extracrId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extracrId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extracrId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extracrId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}