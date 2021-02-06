class InvoiceItemsController < ApplicationController
  before_action :set_invoice_item, only: [:show, :update, :destroy]

  # POST /invoices
  def create
    @invoice_item = InvoiceItem.new(invoice_item_params)

    if @invoice_item.save
      render json: @invoice_item, status: :created, location: @invoice_item
    else
      render json: @invoice_item, status: :unprocessable_entity, serializer: ActiveModel::Serializer::ErrorSerializer
    end
  end

  # GET /invoice_items
  def index
    @q = InvoiceItem.distinct_on(:description).ransack(params[:q])
    @q = @q.result

    @invoice_items = @q.page(params[:size]).per(params[:pageSize])

    render json: @invoice_items#, meta: {itemsTotal: @invoice_items.count, pagesTotal: @invoice_items.total_pages}
  end

  # GET /invoice_items/1
  def show
    render json: @invoice_item
  end

  # PATCH/PUT /invoices/1
  def update
    if @invoice_item.update(invoice_item_params)
      render json: @invoice_item
    else
      render json: @invoice_item.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_invoice_item
      @invoice_item = InvoiceItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def invoice_item_params
      ActiveModelSerializers::Deserialization.jsonapi_parse(params, only: [:id, :description, :quantity, :subtotal, :invoice, :iva0, :iva5, :iva10])
    end
end
