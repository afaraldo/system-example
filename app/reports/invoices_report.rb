class InvoicesReport < Dossier::Report

  def sql
    columns = "\"invoice_items\".id,
               \"invoice_items\".description,
               \"invoice_items\".quantity,
               \"invoices\".name,
               \"invoices\".ruc,
               \"invoices\".number,
               \"invoices\".date,
               \"invoices\".total,
               STRING_AGG(\"tags\".name,' ') AS tags"
    group_by = "\"invoice_items\".id,
               \"invoice_items\".description,
               \"invoice_items\".quantity,
               \"invoices\".name,
               \"invoices\".ruc,
               \"invoices\".number,
               \"invoices\".date,
               \"invoices\".\"person_id\",
               \"invoices\".total,
               \"tags\".\"id\""
    condition1, condition2, condition3, condition4 = nil
    condition1 = "\"invoices\".\"person_id\" IN :person_ids " unless @options['person_ids'] == '*'
    condition1 = "\"invoices\".\"person_id\" IS NULL" if @options['person_ids'].blank?
    condition2 = "\"tags\".\"id\" IN :tag_ids " unless @options['tag_ids'] == '*'
    condition2 = "\"tags\".\"id\" IS NULL " if @options['tag_ids'].blank?
    condition3 = "\"invoices\".\"date\" BETWEEN :from AND :to"
    condition4 = "\"invoices\".\"type\" = 'Sale'"
    not_erased = "\"invoices\".\"deleted_at\" IS NULL"
    # joins all conditions with AND connector
    having_condition = [condition1, condition2].delete_if{|c| c.nil? }.to_sentence(words_connector: ' AND ', last_word_connector: 'AND')
    having_condition = " HAVING " + having_condition unless having_condition.blank?

    order_criteria = "date ASC, number ASC"
    sql_query = "SELECT #{columns}  FROM \"invoice_items\"
          INNER JOIN \"invoices\" ON \"invoice_items\".\"invoice_id\" = \"invoices\".\"id\"
          LEFT JOIN \"invoices_tags\" ON \"invoices_tags\".\"invoice_id\" = \"invoices\".\"id\"
          LEFT JOIN tags ON \"tags\".\"id\" = \"invoices_tags\".\"tag_id\"
          WHERE #{condition3} AND #{not_erased}
          GROUP BY #{group_by} #{having_condition}
          ORDER BY #{order_criteria}"

    # removes person filter when ALL people are requested
    #sql_query.remove!("HAVING") unless condition1 and condition2
    Rails.logger.info("#{@options['from']} - #{@options['to']}")

    sql_query
  end

  def person_ids
    @options['person_ids'].split(",")
  end

  def tag_ids
    @options['tag_ids'].split(",")
  end

  def from
    @options['from'] || '2020-01-01'
  end

  def to
    @options['to'] || Date.tomorrow
  end

  def type
    @options['type'] || 'Buy'
  end

  def format_condition(value)
    value ? 'contado' : 'crédito'
  end

  def format_date(value)
    value.to_date.strftime("%d/%m/%Y")
  end

  def format_stamping_expiry(value)
    value.to_date.strftime("%d/%m/%Y") if value
  end

end