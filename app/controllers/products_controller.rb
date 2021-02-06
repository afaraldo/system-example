class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  # GET /products
  def index
    if (params[:search])
      @q = Product.search_for(params[:search])
    else
      @q = Product.ransack(params[:q]).result
    end
    @products = @q.page(params[:page]).per(params[:pageSize])

    render json: @products, meta: {itemsTotal: @products.total_count, pagesTotal: @products.total_pages}
  end

  # GET /products/1
  def show
    render json: @product
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      ActiveModelSerializers::Deserialization.jsonapi_parse(params,
                                                            only: [ :id, :code, :name, :price])
    end
end
