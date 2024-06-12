//モーダル
// モーダルを開く関数
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// モーダルを閉じる関数
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// モーダル外をクリックしたら閉じる
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
};

// メールフォーム
function submitForm() {
  // フォームデータを取得
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  // ここでフォームデータをGoogle Formに送信する処理を追加
  // 送信後の処理（例: フォームをクリアする）
  document.getElementById("contactForm").reset();
  alert("お問い合わせが送信されました。ありがとうございます！");
}
