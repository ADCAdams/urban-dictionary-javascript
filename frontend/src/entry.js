class Entry {
    static allEntries = []

    constructor(entry){
        this.id = entry.id
        this.term = entry.term
        this.definitions = entry.definitions
        Entry.allEntries.push(this)
    }

    static createEntry(){
        let newEntryForm = document.getElementById('new-entry-form')
        newEntryForm.addEventListener('submit', function(e){
            e.preventDefault()
            apiService.findOrCreateEntry(e)
                .then(entry => {
                    console.log(entry)
                    let newEntry = new Entry(entry)
                    newEntry.displayEntry()
                })
        })
    }


    displayEntry(){

        let containerDiv = document.getElementById('containerDiv');
        containerDiv.innerHTML = ''
        let entryElementP = document.createElement('p');
        let id = entryElementP.dataset.id 
        entryElementP.innerHTML = `<h2 id = entryTermID>
                    ${this.term}: </h2>
                    <br>
                    <h2> Define it your way below! </h2>`

        
            containerDiv.append(entryElementP)
            Definition.newDefinitionForm(this.id)
    }
}