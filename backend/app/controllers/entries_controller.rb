class EntriesController < ApplicationController


    def show
        entry = Entry.find_by(:id => params[:id].to_i)
        render json: entry
    end


end
