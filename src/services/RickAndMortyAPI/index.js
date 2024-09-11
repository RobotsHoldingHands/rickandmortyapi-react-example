export default class RickAndMortyAPI {
    constructor() {
        this.url = "https://rickandmortyapi.com/api";
        this.page = 1;
    }

    goToPage(page) {
        this.page = page;
    }

    async getCharacters() {
        const response = await fetch(
            `${this.url}/character?page=${this.page}`,
            {
                method: "GET",
                redirect: "follow"
            }
        );

        if (!response.ok) throw new Error(`HTTP Request Failed! [${response.status}] ${response.statusText}`);

        return await response.json();
    }
}