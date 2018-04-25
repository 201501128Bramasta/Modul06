var pesawat={ //membuat array bernama pesawat
		setSayap: function (n){ //membuat function dengan nama setSayap
			this.sayap=n; //memberitahu bahwa sayap adalah n
			return this; //menjalankan variabel this (sayap)
		},
		setRoda: function (n){ //membuat function dengan nama
			this.roda=n; //memberitahu bahwa sayap adalah n
			return this; //menjalankan variabel this (roda)
		},
		setPenumpang: function (n){ //membuat function dengan nama
			this.penumpang=n; //memberitahu bahwa sayap adalah n
			return this; //menjalankan variabel this (penumpang)
		},
		lepasLandas: function (){ //membuat function dengan nama
			console.log("Pesawat berisi "+this.penumpang+" orang!"); //menampilkan pesan
			console.log("Pesawat memiliki "+this.sayap+" buah sayap!");
			console.log("Pesawat memiliki "+this.roda+" buah roda!");
			console.log("Pesawat lepas landas!");
		}
	};
	pesawat.setSayap(2).setRoda(3).setPenumpang(200).lepasLandas(); //menjalankan function pada setiap pemanggilan dalam array pesawat