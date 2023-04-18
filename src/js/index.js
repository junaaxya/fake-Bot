/*? no js js needed from me */

const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;
const botSay = (data) => {
  return [
    "selamat datang di anime bot 🙌 nama kamu siapa nih?",
    `halo ${data?.nama} , btw umur kamu berapa ni`,
    `ohh ${data?.umur} tahun, hobi kamu apa nih ?`,
    `waduhh sama dong aku juga suka ${data?.hoby}, anyway kamu suka nonton anime ga?`,
    `ohh ${data?.anime}, kalau boleh tau dah punya pacar belum ?`,
    `${data?.pacar}  yaaa, waduhh mau jadi pacar aku gak wkwkwk`,
    `waduhh ${data?.selesai}  yaaa`
  ];
};
pertanyaan.innerHTML = botSay()[0];

let userData = []


function botStarted() {
    if (jawaban.value.length < 1) return Swal.fire({
       title: ' maaf jawaban tidak boleh kosong ',
       showClass: {
        popup:'animate__animated animate__fadeIn'
       },
       hideClass: {
        popup: 'animate__animated animate__backOutDown animate__faster'
       }
    })

  init++;
  if (init == 1) {
    console.log({ nama: jawaban.value });
    botDelay({ nama: jawaban.value });
  } else if (init == 2) {
    console.log({ umur: jawaban.value });
    botDelay({ umur: jawaban.value });
  } else if (init == 3) {
    console.log({ hoby: jawaban.value });
    botDelay({ hoby: jawaban.value });
  } else if (init == 4) {
    console.log({ anime: jawaban.value });
    botDelay({ anime: jawaban.value });
  } else if (init == 5) {
    console.log({ pacar: jawaban.value });
    botDelay({ pacar: jawaban.value });
  } else if (init == 6) {
    console.log({ selesai: jawaban.value });
    botDelay({ selesai: jawaban.value });
  } else if (init == 7) {
    finishing();
  } else {
    botEnd();
  }

 
}




function botDelay(jawabanUser) {
    
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, "1000");
  userData.push(jawaban.value)
  jawaban.value = "";
}

$('#jawaban').keypress(function(e){
    if(e.which ==13) {
       botStarted()
    }
})
function finishing() {
    pertanyaan.innerHTML = `thanks yaa ${userData[0]} udah main ke anime bot😁`
    jawaban.value = " oke sama-sama "
}

function botEnd() {

  window.location.reload();
} 


