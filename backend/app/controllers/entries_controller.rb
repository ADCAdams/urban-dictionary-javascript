class EntriesController < ApplicationController


    def show
        entry = Entry.find_by(:id => params[:id].to_i)
        options = {
            include: [:definitions]
        }
        render json: EntrySerializer.new(entry,options)
    end

    def index
        entries = Entry.all
        render json: entries
        render json: EntrySerializer.new(entries,options)
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
        params.require(:entry).permit(:term, :definition_count)
    end


end
