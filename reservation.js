document.addEventListener('DOMContentLoaded', function () {


  fetch('https://script.google.com/macros/s/AKfycbwZXoGw0uV2ciDclKA1PQhq5FFfAgOrCPGi-0wxmy_69HREuJh6H5TBqsvkODJUbYVA/exec')
    .then(response => response.json())
    .then(data => {
      const d29 = data['2025-11-29'];
      const d30 = data['2025-11-30'];

      const text29 = document.getElementById('remaining-29');
      const text30 = document.getElementById('remaining-30');
      const box29 = document.getElementById('checkbox-29');
      const box30 = document.getElementById('checkbox-30');
      const dateText29 = document.querySelector('#label-29 .date-text');
      const dateText30 = document.querySelector('#label-30 .date-text');

      if (d29 > 0) {
        text29.textContent = `2025-11-29：あと ${d29} 名程度`;
        box29.disabled = false;
        dateText29.classList.remove('line-through');
      } else {
        text29.textContent = '2025-11-29：予定枚数終了';
        box29.disabled = true;
        dateText29.classList.add('line-through');
      }

      if (d30 > 0) {
        text30.textContent = `2025-11-30：あと ${d30} 名程度`;
        box30.disabled = false;
        dateText30.classList.remove('line-through');
      } else {
        text30.textContent = '2025-11-30：予定枚数終了';
        box30.disabled = true;
        dateText30.classList.add('line-through');
      }
    });

  const form = document.getElementById('reservation-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const dateSelections = [];
    form.querySelectorAll('input[name="date"]:checked').forEach(el => dateSelections.push(el.value));
    const payload = {
      name: data.get('name'),
      furigana: data.get('furigana'),
      email: data.get('email'),
      dates: dateSelections,
      quantity: data.get('quantity'),
      visitors: data.get('visitors')
    };

    console.log('送信データ:', payload);

    fetch('https://script.google.com/macros/s/AKfycbwZXoGw0uV2ciDclKA1PQhq5FFfAgOrCPGi-0wxmy_69HREuJh6H5TBqsvkODJUbYVA/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById('form-message').textContent = '送信が完了しました。確認メールをご確認ください。';
        form.reset();
      } else {
        document.getElementById('form-message').textContent = data.message;
      }
    })
    .catch(() => {
      document.getElementById('form-message').textContent = '送信中にエラーが発生しました。';
    });
});
});
