update consignments 
set barcode = $2, customer_id = $3, date_returned = $4, date_redelivered =$5 
where id =$1

returning *