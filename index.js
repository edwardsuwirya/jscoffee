/*
Americano
1. Buat Order 1 detik
2. Giling kopi 3 detik
3. Seduh kopi 2 detik
4. Penyajian kopi 2 detik

Caffe Latte
1. Buat Order 1 detik
2. Giling kopi 3 detik
3. Hangatkan susu 1.5 detik
4. Seduh kopi + mix susu 3 detik
5. Penyajian kopi 2 detik
 */

const order = (beverageProduction) => {
    setTimeout(() => {
        console.log("Order placed : ")
        beverageProduction();
    }, 1000);
};

const americanoProduction = () => {
    const menuName = "Americano";
    console.log(menuName);
    setTimeout(() => {
        console.log("Proses Giling kopi Selesai");
        setTimeout(() => {
            console.log("Proses Seduh kopi Selesai");
            setTimeout(() => {
                console.log(`Penyajian kopi ${menuName} Selesai`);
            }, 2000)
        }, 2000)
    }, 3000);
};

const caffeLatteProduction = () => {
    const menuName = "Caffe Latte";
    console.log(menuName);
    setTimeout(() => {
        console.log("Proses Giling kopi Selesai");
        setTimeout(() => {
            console.log("Proses Susu Hangat Selesai");
            setTimeout(() => {
                console.log("Proses Seduh kopi,mix Susu Hangat Selesai");
                setTimeout(() => {
                    console.log(`Penyajian kopi ${menuName} Selesai`);
                }, 2000)
            }, 3000)
        }, 1500)
    }, 3000);
};

order(caffeLatteProduction);
order(americanoProduction);


