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
    if @email.update(email_params)
      render json: @email
    else
      render json: { errors: @email.errors } 
    end
  end

  def delete
    @email.destroy
    render json: { message: 'email deleted' }
  end

  private 

  def email_params
    params.require(:email).permit(:header, :body, :sender, :category, :filter, :time, :user_id)
  end
end
