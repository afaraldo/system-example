class InvoicesController < ApplicationController
  before_action :set_invoice, only: [:show, :update, :destroy]

  # GET /invoices
  def index
    if  params[:search]
      @q = Invoice.search_for(params[:search])
    else
      @q = Invoice.ransack(params[:q])
      @q.sorts = ['number desc', 'created_at desc'] if @q.sorts.empty?
      @q = @q.result
    end
    @invoices = @q.page(params[:page]).per(params[:pageSize])

    render json: @invoices.map{|invoice| invoice.becomes(Invoice)}#, meta: {itemsTotal: @invoices.total_count, pagesTotal: @invoices.total_pages}
  end

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
end
