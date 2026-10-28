const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function tanya(pertanyaan) {
  return new Promise((resolve) => rl.question(pertanyaan, resolve));
}

async function main() {
  const harga = Number(await tanya("Masukkan harga produk: "));
  if (isNaN(harga) || harga <= 0) {
    console.log("Input tidak valid");
    rl.close();
    return;
  }

  const jumlah = Number(await tanya("Masukkan jumlah produk: "));
  if (!Number.isInteger(jumlah) || jumlah <= 0) {
    console.log("Input tidak valid");
    rl.close();
    return;
  }

  const jawab = (await tanya("Apakah member? (y/n): ")).trim().toLowerCase();
  const member = jawab === "y" || jawab === "ya";

  let subtotal = harga * jumlah;

  if (member) {
    subtotal = subtotal - subtotal * 0.1;
  }

  if (subtotal >= 250000) {
    subtotal = subtotal - 15000;
  }

  console.log("Total pembayaran = Rp" + subtotal.toLocaleString("id-ID"));
  rl.close();
}

main();