class DefinitionsController < ApplicationController

    def index
        definitions = Definition.all
        #definitions.order(:likes)
        render json: definitions
    end

    def create

        definition = Definition.create(definition_params)
        # entry = Entry.find_by(id: definition_params[:entry_id])
        
        #binding.pry
        # entry.definition_count += 1
        # entry.save
        render json: definition
    end

    def destroy
        definition = Definition.find_by(id: params[:id]).destroy
        render json: definition
    end

    def update 
        definition = Definition.find_by(id: definition_params[:id])
        newLike = definition.likes
        # binding.pry
        newLike = newLike + 1
        definition.update(likes: newLike)
        render json: definition
    end


private

    def definition_params
        params.require(:definition).permit(:description, :example, :likes, :entry_id, :id)
    end

end
