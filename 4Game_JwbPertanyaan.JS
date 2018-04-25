function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Juooss Jawabmu Bener, Bro ... !');
			console.log('');
		}
		else
		{
			console.log('JawabMu Belum Bener, Bro ... !! Coba lagi... tetap Semangat !');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Kamu Membutuhkan Mata Kuliah Pemrograman Web ?',
	['Ya', 'Tidak', 'Sangat'],
	'3'); 
	var q2 = new Question('Bagaimana Proses Tutorial Mata Kuliah Pemrograman Web ?',
	['Menyenangkan', 'Membosankan', 'Meletihkan', 'Bingung','Amazing'],
	'2');
	var q3 = new Question('Apakah anda pernah menggunakan Javasript sebelum mengikuti perkuliahan ini ?',
	['Pernah', 'Belum Pernah', 'Belum Pernah Sama Sekali'],
	'1');
	var q4 = new Question('Tag yang digunakan untuk Penulisan Judul Utama ?',
	['< a>', '< h1>','< p>','< br>'],
	'1');
	var q5 = new Question('Siapa dosen ganteng yang mengajar matakuliah pemrograman web ?',
	['Pak Adhi', 'Pak Suyudi', 'Pak Oskar','Pak Putu','Pak Pados','Pak Moko'],
	'2');
    var q6 = new Question('Apakah JavaScript bahasa pemrograman paling keren sedunia ?',
	['Ya', 'Enggak'],
	'1');
    var q7 = new Question('CODING ... Bagaimana tanggapanmu mendengar istilah itu  ?',
	['Menyenangkan', 'Tidak Menyenangkan','Tantangan','Wow .. Berat '],
	'2');
    var q8 = new Question('Apa fungsi tag <br>  ?',
	['membuat nama judul', 'membuat isian','Membuat Judul Utama','Memisahkan baris'],
	'3');
    var q9 = new Question('Bro.... Apa yang kamu Rasakan setelah belajar PEMROGRAMAN WEB ?',
	['terharu', 'Menangis', 'amazing', 'WOW','STRESS tetapi jadi TANTANGAN'],
	'4');
    var q10 = new Question('Pasangan tag <script> dan </script> digunakan untuk?',
	['menyisipkan javascript', 'Menyisipkan pesan'],
	'0');
    var q11 = new Question(' Apakah Mata Kuliah Pemrograman Web cukup  1 Semester saja ?',
	['Ya', 'Tidak', 'Harus diperdalam pada Semester berikut', 'Tidak Perlu'],
	'2');
    
	var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar! Ketik "KELUAR" untuk keluar dari Game Pertanyaan ini !');

			if (answer == 'KELUAR')
			{
				console.log('');
				console.log('===Keluar Dari Permainan===');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor Akhir Nilaimu = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}