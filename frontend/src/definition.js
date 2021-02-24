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
            <form  id="definition-form">
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
     
    }








}