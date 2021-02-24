class Definition {

    static allDefinitions = []

    constructor(definition){
        this.id = definition.id
        this.description = definition.description
        this.example = definition.example
        Definition.allDefinitions.push(this)
    }



    static newDefinitionForm(entry_id) {

        let containerDiv = document.getElementById('containerDiv');

        let definitionForm = 
            `   
            <form  id="definition-form-id">
            <label>Definition:</label>
            <input type="text" class = "definition-form" id="definition-description"/>
            <br>
            <br>
            <label>Use it in a sentence:</label>
            <input type="text" class = "definition-form" id="definition-example"/>
            <input type="submit"/>
            <h4>Other definitions:</h4>
            </form>
            
            `
        containerDiv.insertAdjacentHTML('beforeend', definitionForm);
        Definition.newDefinitionObj(entry_id)
     
    }

    static newDefinitionObj(entry_id){
        let form = document.getElementById("definition-form-id")
        form.addEventListener('submit', function(e){

            apiService.postDefinition(e, entry_id).then(json => {
                form.reset()
                let newDefinition = new Definition(json)
                newDefinition.createDefinitionSpan()

            })


        })

    }

    createDefinitionSpan(){
        let defSpanContainer = document.createElement('span');
        let defDescSpan = document.createElement('span');
        let defExampleSpan = document.createElement('span');
        defSpanContainer.className = "definition-container-span"
        defSpanContainer.setAttribute('data-id', this.id)
        defDescSpan.className = "definition-description-span"
        defDescSpan.innerHTML = this.description
        defExampleSpan.className = "definition-example-span"
        defExampleSpan.innerHTML = this.example

        defSpanContainer.append(defDescSpan);
        defSpanContainer.append(defExampleSpan)

        this.appendDefintionSpan(defSpanContainer)
    }

    appendDefintionSpan(defSpan){
        let definitionsDivContainer = document.getElementById("definitions-div-container");
        definitionsDivContainer.append(defSpan);
    }








}