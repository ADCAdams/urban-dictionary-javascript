class DefinitionsController < ApplicationController

    def index
        definitions = Definition.all
        render json: definitions
    end

    def create
        #binding.pry
        definition = Definition.create(definition_params)
        entry = Entry.find_by(id: params[:entry_id])
        entry.defintion_count += 1
        render json: definition
    end

    def destroy
        definition = Definition.find_by(id: params[:id]).destroy
        render json: definition
    end

private

    def definition_params
        params.require(:definition).permit(:description, :example, :entry_id)
    end

end
