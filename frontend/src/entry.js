class Entry {
    static allEntries = []

    constructor(entry){
        
        this.id = entry.id
        this.term = entry.term
        this.definition_count = entry.definition_count
        this.definitions = entry.definitions

        if ( this.definition_count > 0) {
            this.getOldDefinitions() 
        }

        Entry.allEntries.push(this)
    }

    static createEntry(){
        let newEntryForm = document.getElementById('new-entry-form')
        newEntryForm.addEventListener('submit', function(e){
            e.preventDefault()
            apiService.findOrCreateEntry(e)
                .then(entry => {
                    if (entry.data){
                                    //old entry
                                    console.log("old")
                                let oldEntry = entry.data.attributes
                                let newEntry = new Entry(oldEntry)
                                newEntry.displayEntry()
                    } else {
                        console.log("new")
                        console.log(entry)
                        let newEntry = new Entry(entry)
                        newEntry.displayEntry()
                    }
                    
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

            let sortButton = document.createElement('button')
            sortButton.className = "definition-sort-button"
            sortButton.innerHTML = "Sort Definitions"
            sortButton.dataset.id = this.id
    
            this.sortDefinitions(sortButton);
            containerDiv.prepend(sortButton);

            containerDiv.append(entryElementP)
 
            this.getDefinitions();

            Definition.newDefinitionForm(this.id)
    }

    sortDefinitions(button){


        button.addEventListener('click', function(e){
            let entryID = parseInt(e.target.dataset.id);
            let entry = Entry.allEntries.find(element => element.id = entryID);

            e.preventDefault()
            document.getElementById("definitions-div-container").innerHTML="";
            entry.getDefinitions();
        })
        
    }

    getDefinitions(){
        if (this.definitions){
        
            this.definitions.sort(function(a,b) {
                var nameA = a.description.toUpperCase(); // ignore upper and lowercase
              var nameB = b.description.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1; //nameA comes first
              }
              if (nameA > nameB) {
                return 1; // nameB comes first
              }
              return 0;  // names must be equal
            })
            this.definitions.forEach(function(def){
                
                let newDef = new Definition(def)
                newDef.createDefinitionSpan()
            })
        }
    }

    sendDefinition(def){
        let newDef = new Definition(def)
        newDef.createDefinitionSpan()
    }

    getOldDefinitions(){
        apiService.getDefinitions().then(definitions => {
            // console.log(heros)
            definitions.forEach(definition => {
                if (definition.entry_id){

                }
            
            })
        })
    }








} //ends class

    
