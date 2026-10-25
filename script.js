document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");
// Latihan 1 -  Menampilkan output
// const namaPengguna = prompt("Masukkan nama Anda:", "");
// if (namaPengguna && namaPengguna.trim() !== "") {
// 	alert("Halo, " + namaPengguna + "!");
// }

// Latihan 2 - Alert dan Prompt
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
	alert("Halo, " + namaPengguna + "!");
	document.getElementById("pesan").textContent =
		"Selamat datang, " + namaPengguna + ".";
} else {
	alert("Nama belum diisi.");
}

// Latihan 3 -  Function dan operasi aritmatika
function operasiDasar(a, b) {
	console.log("Penjumlahan:", a + b);
	console.log("Pengurangan:", a - b);
	console.log("Perkalian:", a * b);
	console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
	console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

// Latihan 4 - Seleksi kondisi if-else
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (
	inputNilai === null ||
	inputNilai.trim() === "" ||
	Number.isNaN(nilaiMahasiswa) ||
	nilaiMahasiswa < 0 ||
	nilaiMahasiswa > 100
) {
	alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
	alert(nilaiMahasiswa + " : Anda Lulus");
} else {
	alert(nilaiMahasiswa + " : Anda Belum lulus");
}

// Latihan 5 - Seleksi kondisi switch
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
	case "1":
		alert(inputPilihan + " : Bilangan satu");
		break;
	case "2":
		alert(inputPilihan + " : Bilangan dua");
		break;
	case "3":
		alert(inputPilihan + " : Bilangan tiga");
		break;
	case "4":
		alert(inputPilihan + " : Bilangan empat");
		break;
	case "5":
		alert(inputPilihan + " : Bilangan lima");
		break;
	default:
		alert(inputPilihan + " : Pilihan tidak tersedia");
}

// Latihan 6 - Form bilangan genap atau ganjil
function cekBilangan() {
	const input = document.getElementById("bilangan").value;
	const angka = Number(input);
	const hasil = document.getElementById("hasilBilangan");
	if (input.trim() === "" || !Number.isInteger(angka)) {
		hasil.textContent = "Masukkan bilangan bulat yang valid.";
	} else if (angka % 2 === 0) {
		hasil.textContent = "Bilangan genap";
	} else {
		hasil.textContent = "Bilangan ganjil";
	}
}

// Latihan 7 - Mengubah warna halaman
function ubahWarnaLatar(warna) {
	document.body.style.backgroundColor = warna;
}

// Latihan 8 - DOM dan Checkbox menu makanan
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
	item.addEventListener("change", hitungTotal);
});
function hitungTotal() {
	let total = 0;
	daftarMenu.forEach((item) => {
		if (item.checked) total += Number(item.value);
	});
	document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// Mini project - Kalkulator Nilai Mahasiswa
function hitungNilaiAkhir(tugas, uts, uas) {
	return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}
function tentukanPredikat(nilai) {
	if (nilai >= 85) return "A";
	if (nilai >= 75) return "B";
	if (nilai >= 60) return "C";
	if (nilai >= 50) return "D";
	return "E";
}

let tugas = 85;
let uts = 75;
let uas = 88;
const akhir = hitungNilaiAkhir(tugas, uts, uas);
console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");

// Fungsi tambahan untuk memproses form kalkulator nilai mahasiswa secara interaktif
function prosesHitungNilai() {
	const valTugas = document.getElementById("inputTugas").value;
	const valUts = document.getElementById("inputUts").value;
	const valUas = document.getElementById("inputUas").value;
	const containerHasil = document.getElementById("hasilMahasiswa");

	// Validasi kosong atau tidak valid
	if (valTugas.trim() === "" || valUts.trim() === "" || valUas.trim() === "") {
		alert("Semua kolom nilai wajib diisi!");
		containerHasil.textContent = "";
		return;
	}

	const t = Number(valTugas);
	const u = Number(valUts);
	const a = Number(valUas);

	// Validasi rentang 0 - 100
	if (
		t < 0 ||
		t > 100 ||
		u < 0 ||
		u > 100 ||
		a < 0 ||
		a > 100 ||
		Number.isNaN(t) ||
		Number.isNaN(u) ||
		Number.isNaN(a)
	) {
		alert(
			"Validasi Gagal: Nilai harus berupa angka di antara rentang 0 sampai 100!",
		);
		containerHasil.textContent = "";
		return;
	}

	const akhirVal = hitungNilaiAkhir(t, u, a);
	const predikatVal = tentukanPredikat(akhirVal);
	const statusVal = akhirVal >= 60 ? "Lulus" : "Belum lulus";

	// Tampilkan hasil ke elemen HTML
	containerHasil.innerHTML = `
        Nilai Akhir: ${akhirVal.toFixed(2)} <br>
        Predikat: ${predikatVal} <br>
        Status: ${statusVal}
    `;
	alert(containerHasil.textContent);
}
