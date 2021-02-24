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

    postDefinition(e, entry_id){
        return fetch(`${this.baseUrl}/definitions`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(
                    {
                        definition: {
                            description: e.target.children[0].value,
                            example: e.target.children[1].value,
                            entry_id: entry_id
                        }
                    }
                )
            })
            .then(resp => resp.json())
    }


}
