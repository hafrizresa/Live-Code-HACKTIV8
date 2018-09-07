// Competencies: Loopings
/*
=================
Odd Series
=================
Instruksi
=========
Buatlah sebuah proses pengecekan dengan menggunakan looping (boleh dengan while atau for).
Disediakan variabel max, dimana akan menampilkan deret ganjil dari terbesar ke kecil hingga mencapai angka 1.
Tampilkan deret ganjil sejumlah nilai max.

contoh 1 (max = 4)
31
31
31
31

contoh 2 (max = 5)
531
531
531
531
531

contoh 3 (max = 10)
97531
97531
97531
97531
97531
97531
97531
97531
97531
97531

Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var max = 10


for (counter=0; counter<max; counter++){
  var counterDalam = 0;
  var temp = ''
  var deret = max
  for (deret; deret>0; deret--) {
    if (deret%2 != 0){
      temp = temp + deret
    }
  }
  console.log(temp)
}
