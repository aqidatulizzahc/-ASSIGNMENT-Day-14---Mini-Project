```
START
INPUT harga produk
IF harga produk bukan angka positif THEN
	OUTPUT “Input tidak valid”
	STOP
ENDIF
INPUT jumlah produk
IF jumlah produk bukan bilangan bulat positif THEN
	OUTPUT “Input tidak valid”
	STOP
ENDIF
INPUT status member
Subtotal <- harga produk * jumlah produk
IF member THEN
	subtotal <- subtotal * 0.10
ENDIF
IF subtotal >= 250.000 THEN
	subtotal <- subtotal - 15.000
ENDIF
OUTPUT total pembayaran = subtotal
STOP
```