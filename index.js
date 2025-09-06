let angka1 = 12;
let angka2 = 5;

console.log("Penjumlahan", angka1 + angka2);
console.log("Pengurangan", angka1 - angka2);
console.log("Perkalian", angka1 * angka2);
console.log("Pembagian", angka1 / angka2);
console.log("Modulus", angka1 % angka2);

let nilaiUjian = angka1 * angka2;

console.log('lebih dari atau sama dengan 80.', nilaiUjian >= 80);
console.log('Kurang dari atau sama dengan 60', nilaiUjian <= 60);
console.log('Di antara 60 dan 80', nilaiUjian >= 60 && nilaiUjian <= 80);

console.log('Bisa masuk ptn?');
if (nilaiUjian >= 70) {
    console.log('Bisa masuk ptn');
} else {
    console.log('Belum cukup untuk masuk ptn');
}


let nilai = (nilaiUjian >= 60) ? 'Lulus' : 'Tidak Lulus';
console.log(nilai);


// NEXT
let umur = 19;
if (umur >= 17) {
    console.log('Boleh punya SIM');
} else {
    console.log('Tidak boleh punya SIM');
}

// NEXT
let skor = 92
if (skor >=90) {
    console.log('Nilai A');
} else if (skor >= 80) {
    console.log('Nilai B');
} else if (skor >= 70) {
    console.log('Nilai C');
} else {
    console.log('Nilai D');
}