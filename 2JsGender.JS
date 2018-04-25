	const Orang=(nama, gender, tanggalLahir)=>{ //membuat suatu variabel menggunakan fungsi const atau konstanta
		let namaSaya=nama,
		tanggalLahirSaya=new Date(tanggalLahir); //memberitahu bahwa tanggalLahirSaya dengan tanggal baru
		const genderSaya=gender; //memberitahu bahwa variabel dengan menggunakan const genderSaya adalah gender
		return{ //menjalankan suatu fungsi
			setNama:(namaBaru)=>namaSaya=namaBaru, //membuat namaBaru yang muncul berdasarkan namaSaya
			nama:()=>namaSaya, //memberitahu bahwa nama adalah namaSaya
			gender:(genderSaya)?'Laki-laki':'Perempuan', //memberitahu dalam gender terdapat Laki-laki dan Perempuan
			usia:()=>
				(new Date()).getFullYear() - tanggalLahirSaya.getFullYear() //membuat suatu usia berdasarkan tanggal sekarang dikurang tanggal lahir adalah usianya
		};
	}
	const agus=Orang('Agus', 1, '1995-10-21'); //memasukan suatu data pada array Orang
	console.log(agus.nama()); //Pemanggilan output
	console.log(agus.gender);
	console.log(agus.usia());
	console.log(agus.setNama('Agustinus'));
	console.log(agus.nama());