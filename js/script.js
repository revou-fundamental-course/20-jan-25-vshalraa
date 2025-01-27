// Ini File Javascript
// Menambahkan event listener untuk tombol "Hitung BMI"
document.getElementById("hitung").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    // Validasi Input
    if (!weight || !height) {
        alert("Mohon isi berat dan tinggi badan dengan benar.");
        return;
    }

    // Menghitung nilai BMI
    const bmi = (weight / (height * height)).toFixed(1);
    const result = document.getElementById("result");
    const bmiGender = document.getElementById("bmiGender");
    const bmiStatus = document.getElementById("bmiStatus");    
    const bmiValue = document.getElementById("bmiValue");
    const bmiValueBottom = document.getElementById("bmiValueBottom");
    const bmiAdvice = document.getElementById("bmiAdvice");
    const bmiNote = document.getElementById("bmiNote");
    const underweight = document.getElementById("underweight");
    const overweight = document.getElementById("overweight");
    const normal = document.getElementById("normal");

    // Menampilkan informasi BMI
    bmiGender.textContent = `BMI untuk ${gender}`;
    bmiValue.textContent = `${bmi}`;
    bmiNote.textContent = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";

    // Reset elemen-elemen
    underweight.style.display = "none"; // Reset elemen
    overweight.style.display = "none"; // Reset elemen
    normal.style.display = "none"; // Reset elemen

    // Menentukan kategori BMI
    if (bmi < 18.5) {
        underweight.style.display = "block"; // Tampilkan underweight
        bmiStatus.textContent = "Berat badan kurang";
        bmiValueBottom.textContent = "Hasil BMI kurang dari 18.5";
        bmiAdvice.textContent = "Anda berada dalam kategori underweight atau berat badan kurang. Disarankan untuk meningkatkan asupan kalori dan berkonsultasi dengan ahli gizi.";
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        normal.style.display = "block"; // Tampilkan normal
        bmiStatus.textContent = "Berat badan ideal";
        bmiValueBottom.textContent = "Hasil BMI diantara 18.5 dan 22.9";
        bmiAdvice.textContent = "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        overweight.style.display = "block"; // Tampilkan overweight
        bmiStatus.textContent = "Berat badan lebih";
        bmiValueBottom.textContent = "Hasil BMI di antara 25 - 29.9";
        bmiAdvice.textContent = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else {
        overweight.style.display = "block"; // Tampilkan overweight
        bmiStatus.textContent = "Obesitas";
        bmiValueBottom.textContent = "Hasil BMI lebih dari 30.0";
        bmiAdvice.textContent = "Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
    }

    // Tampilkan hasil BMI
    result.style.display = "block";
    // Tampilkan tombol konsultasi dan registrasi
    document.querySelectorAll('.button2').forEach(button => {
        button.style.display = "inline-block";
    });
});

// Event untuk tombol "Reset"
document.querySelector("button[type='reset']").addEventListener("click", function () {
// Sembunyikan hasil BMI
document.getElementById("result").style.display = "none";
// Sembunyikan tombol Konsultasi dan Registrasi
document.querySelectorAll('.button2').forEach(button => {
    button.style.display = "none";
});

    // Reset nilai elemen form
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";

    // Reset nilai di hasil BMI
    document.getElementById("bmiGender").textContent = "";
    document.getElementById("bmiStatus").textContent = "";
    document.getElementById("bmiValue").textContent = "0";
    document.getElementById("bmiValueBottom").textContent = "";
    document.getElementById("bmiAdvice").textContent = "";
    document.getElementById("bmiNote").textContent = "";
    document.getElementById("underweight").style.display = "none";
    document.getElementById("overweight").style.display = "none";
});