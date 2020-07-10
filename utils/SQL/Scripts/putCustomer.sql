update customers 
set "name" = $2, address = $3, postcode = $4, g_area =$5 
where id =$1

returning *