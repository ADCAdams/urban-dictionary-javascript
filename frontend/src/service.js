class ApiService {

    constructor() {
        this.baseUrl = `http://localhost:3000`
    }


    
    findOrCreateEntry(event){           // finds entry in db
        return fetch(`${this.baseUrl}/entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {
                    entry: {
                        term: event.target.children[1].value
                    }
                })
            })
                .then(resp => {
                    let json = resp.json()
                    return json     
                })
    }

}
