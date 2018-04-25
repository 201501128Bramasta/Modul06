var obj={name:"Agus"}; //membuat objek dengan variabel name yang isinya Agus
var greeting=function(a,b,c){ //membuat suatu function dengan menggunakan syarat a,b,c
return "Selamat datang "+this.name+" ke "+a+" "+b+" di "+c; //menjalankan suatu fungsi
};
console.log(greeting.call(obj,"Tambakreja","Cilacap","Jawa Tengah")); //memanggil suatu fungsi greeting dan obj

var obj={name:"Agus"}; /membuat objek dengan variabel name yang isinya Agus
	var greeting=function(a,b,c){ //membuat suatu function dengan menggunakan syarat a,b,c
		return "Selamat datang "+this.name+" ke "+a+" "+b+" di "+c; //menjalankan suatu fungsi
	};
	var bound=greeting.bind(obj); //memanggil suatu fungsi greeting dan obj
	console.dir(bound); //menampilkan output pada variabel bound
	console.log("Output using .bind() below "); //menampilkan output
	console.log(bound("Tambakreja","Cilacap","Jawa Tengah")); //memanggil serta memasukkan data pada output