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

}