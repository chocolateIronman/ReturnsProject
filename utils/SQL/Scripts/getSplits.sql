with
get_packet_area as(
select customers.g_area, consignments.id, consignments.barcode
from consignments 
join customers on consignments.customer_id = customers.id),

get_packet_van as(
select get_packet_area.id as "pack_id",barcode, vans.g_area as "van_area", vans.id as "van_id"
from get_packet_area
join vans on get_packet_area.g_area=vans.id)

select * from get_packet_van

