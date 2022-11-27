function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("timeskrng").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

function coba() {
  let d_nama = document.getElementById("fname").value
  let d_pembayaran = document.getElementById("metode").value
  let d_email = document.getElementById("email").value
  let d_alamat = document.getElementById("alamat").value
  let d_country = document.getElementById("country").value
  let d_nohp = document.getElementById("noHP").value
  let d_check = document.getElementById("agree").value
  localStorage.setItem("fullname",d_nama)
  localStorage.setItem("metodepem",d_pembayaran)
  localStorage.setItem("emailc",d_email)
  localStorage.setItem("countryc",d_country)
  localStorage.setItem("alamatc",d_alamat)
  localStorage.setItem("nohpc",d_nohp)
  // alert(d_nama)
  // alert(d_pembayaran)
  // alert(d_email)
  // alert(d_alamat)
  // alert(d_country)
  // alert(d_nohp)
  // alert(d_check)


}