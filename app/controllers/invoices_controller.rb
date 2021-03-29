class InvoicesController < ApplicationController
  before_action :set_invoice, only: [:show, :update, :destroy]
  resource :invoice

  # GET /invoices/1
  def show
    render json: @invoice
  end

  # POST /invoice_items
  def create
     @invoice = CreateInvoice.run(invoice_params)

    if @invoice.valid?
      render json: @invoice.result, status: :created, location: @invoice
    else
      render json: @invoice, status: :unprocessable_entity, serializer: ActiveModel::Serializer::ErrorSerializer
    end
  end

  # PATCH/PUT /invoices/1
  def update
    if @invoice.update(invoice_params)
      render json: @invoice
    else
      render json: @invoice.errors, status: :unprocessable_entity
    end
  end

  # DELETE /invoices/1
  def destroy
    @invoice.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_invoice
      @invoice = Invoice.includes(:items).find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def invoice_params
      ActiveModelSerializers::Deserialization.jsonapi_parse(params)
    end

    def sorts
      ['number desc', 'created_at desc']
    end
end
