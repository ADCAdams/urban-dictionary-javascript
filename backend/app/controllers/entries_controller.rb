class EntriesController < ApplicationController


    def show
        entry = Entry.find_by(:id => params[:id].to_i)
        render json: entry
    end

    def index
        entries = Entry.all
        render json: entries
    end


    def create
        if Entry.find_by(:term => entry_params[:term])
            entry = Entry.find_by(:term => entry_params[:term])
            redirect_to "/entries/#{entry.id}"
        else
            entry = Entry.create(entry_params)
            render json: entry
        end
    end

    private

    def entry_params
        params.require(:entry).permit(:term, :definition_count, :likes)
    end


end
