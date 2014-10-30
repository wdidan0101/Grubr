class UsersController < ApplicationController

  def index
    @user = current_user
    @menus = @user.menus
    respond_to do |f|
      f.json { @menus.to_json }
      f.html { render 'index' }
    end
  end

  def new
       @user = User.new
  end

  def create
     @user = User.new(params.require(:user).permit(:name, :email, :password))
     if @user.save
          # log the user in
          redirect_to root_path
     else
          render 'new'
     end
  end


end
