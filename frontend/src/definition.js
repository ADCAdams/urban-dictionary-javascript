class Definition {

    static allDefinitions = []

    constructor(definition){
      
        this.id = definition.id
        this.description = definition.description
        this.example = definition.example
        this.likes = definition.likes
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
            e.preventDefault();
            apiService.postDefinition(e, entry_id).then(json => {
                form.reset();
                if(json.data){
                    let def = json.data.attributes
                    let newDefinition = new Definition(def);
                    newDefinition.createDefinitionSpan();
                } else {
                    let newDefinition = new Definition(json);
                    newDefinition.createDefinitionSpan();
                }

                
                

            })


        })

    }

    createDefinitionSpan(){
        let defSpanContainer = document.createElement('span');
        let defTopSpanContainer = document.createElement('span');
        let defLikeSpan = document.createElement('span');
        let defDescSpan = document.createElement('span');
        let defExampleSpan = document.createElement('span');
        let deleteButton = document.createElement('button')
        let likeButton = document.createElement('button')

        defSpanContainer.className = "definition-container-span"
        defSpanContainer.setAttribute('data-id', this.id)

        defTopSpanContainer.className = "definition-top-container-span"

        defDescSpan.className = "definition-description-span"
        defDescSpan.innerHTML = `Definition: ${this.description}`

        defExampleSpan.className = "definition-example-span"
        defExampleSpan.innerHTML = `Example: ${this.example}`

        defLikeSpan.className = "definition-like-span"
        defLikeSpan.innerHTML = `Likes: ${this.likes}`

        deleteButton.className = "definition-button"
        deleteButton.innerHTML = "Delete"

        likeButton.className = "definition-button"
        likeButton.innerHTML = "Like"

        defTopSpanContainer.append(defDescSpan);
        defTopSpanContainer.append(defLikeSpan);

        defSpanContainer.append(defTopSpanContainer)
        defSpanContainer.append(defExampleSpan)
        defSpanContainer.append(deleteButton)
        defSpanContainer.append(likeButton)

        this.deleteDefinition(deleteButton)
        this.likeDefinition(likeButton)

        this.appendDefintionSpan(defSpanContainer)
    }

    appendDefintionSpan(defSpan){
        let definitionsDivContainer = document.getElementById("definitions-div-container");
        definitionsDivContainer.append(defSpan);

    }

    deleteDefinition(button){
        button.addEventListener('click', function(e){
            e.preventDefault()
            apiService.deleteDefinition(e)
                e.target.parentElement.remove();
        })
    }

    likeDefinition(button){
        button.addEventListener('click', function(e){
            e.preventDefault();
            apiService.likeDefinition(e).then(json => {
                console.log(`${json}`)
                e.target.parentNode.children[0].children[1].innerHTML = `Likes: ${100}`;
            })
            
        })
    }








}