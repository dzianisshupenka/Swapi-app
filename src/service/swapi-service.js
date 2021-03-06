export default class SwapiService {
    _baseApiURL = 'https://swapi.dev/api';
    _daseImgUrl = 'https://starwars-visualguide.com/assets/img/';
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

    getPersonImage = ({id}) => {
        return `${this._daseImgUrl}characters/${id}.jpg`
    }

    getStarshipImage = ({id}) => {
        return `${this._daseImgUrl}starships/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
        return `${this._daseImgUrl}planets/${id}.jpg`
    }

    getAllStarships = async () => {
        const res = await this.getResourses(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResourses(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            cost_in_credits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}