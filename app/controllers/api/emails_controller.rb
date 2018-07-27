class Api::EmailsController < ApplicationController
  def index
    render json: Email.all
  end

  def create
    email = Email.create(email_params)
    if email.save
      render json: email
    else
      render json: { errors: email.errors } 
    end
  end

  def edit
    @email = Email.find(params[:id])
    if @email.update(email_params)
      render json: @email
    else
      render json: { errors: @email.errors } 
    end
  end

  def destroy
    @email = Email.find(params[:id])
    @email.destroy
    render json: { message: 'email deleted' }
  end

  private 

  def email_params
    params.require(:email).permit(:header, :body, :sender, :category, :filter, :time, :user_id)
  end
end
