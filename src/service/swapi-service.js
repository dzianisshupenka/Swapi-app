export default class SwapiService {
    _baseApiURL = 'https://swapi.dev/api';
    async getResourses (url) {
        const res = await fetch(`${this._baseApiURL}${url}`);

        if (!res.ok) {
            throw new Error(`couldn't fetch ${url}, error ${res.status} `)
        }
        return await res.json();
    }
    async getAllPeople() {
        const res = await this.getResourses(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResourses(`/people/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResourses(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResourses(`/planets/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResourses(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResourses(`/starships/${id}/`);
    }
}