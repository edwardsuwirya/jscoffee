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

let is_open = true;

let job = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_open) {
            setTimeout(() => {
                resolve(work())
            }, time)
        } else {
            reject("Our shop is closed");
        }
    })
}

const order = (orders) => {
    job(1000, () => {
        console.log("Order placed : ");
        for (let i = 0; i < orders.length; i++) {
            orders[i]();
        }
    }).catch((err) => console.log(err));
};

const americanoProduction = () => {
    const menuName = "Americano";
    console.log(menuName);
    job(3000, () => console.log("Proses Giling kopi Selesai"))
        .then(() => job(2000, () => console.log("Proses Seduh kopi Selesai")))
        .then(() => job(2000, () => console.log(`Penyajian kopi ${menuName} Selesai`)))
        .finally(() => console.log("Finish"));
};

const caffeLatteProduction = () => {
    const menuName = "Caffe Latte";
    console.log(menuName);
    job(3000, () => console.log("Proses Giling kopi Selesai"))
        .then(() => job(1500, () => console.log("Proses Susu Hangat Selesai")))
        .then(() => job(3000, () => console.log("Proses Seduh kopi,mix Susu Hangat Selesai")))
        .then(() => job(2000, () => console.log(`Penyajian kopi ${menuName} Selesai`)))
        .finally(() => console.log("Finish"));
};

order([caffeLatteProduction, americanoProduction]);


