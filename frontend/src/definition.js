class Definition {

    static allDefinitions = []

    constructor(definition){
        this.id = definition.id
        this.description = definition.description
        this.example = definition.example
        Definition.allDefinitions.push(this)
    }








}