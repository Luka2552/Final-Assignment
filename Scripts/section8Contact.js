window.onload = function () {
  var spansWithAsterisk = document.querySelectorAll(
    'span[class*="placeholder"][innerHTML*="*"]'
  );

  spansWithAsterisk.forEach(function (span) {
    span.classList.add('asterisk');
  });
};

const inputElements = document.querySelectorAll('.section8-filter');

inputElements.forEach(function (inputElement) {
  inputElement.addEventListener('input', function () {
    const placeholder = this.nextElementSibling;

    if (this.value.trim() !== '') {
      placeholder.style.display = 'none';
    } else {
      placeholder.style.display = 'inline-block';
    }
  });
});

function openModal(message) {
  const overlay = document.getElementById('overlay');
  const customModal = document.getElementById('customModal');
  const modalContent = document.getElementById('modalContent');

  overlay.style.display = 'block';
  modalContent.innerHTML = message;
  customModal.style.display = 'block';
}

function closeAlert() {
  const overlay = document.getElementById('overlay');
  const customModal = document.getElementById('customModal');

  overlay.style.display = 'none';
  customModal.style.display = 'none';
}

function emailCheck(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function urlChecker(url) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
}

function section8Form() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const website = document.getElementById('website').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !website || !message) {
    openModal('ყველაფერი შეავსეთ!');
    return;
  }

  if (!emailCheck(email)) {
    openModal('სწორი იმეილი შეიყვანეთ!');
    return;
  }

  if (!urlChecker(website)) {
    openModal('სწორი ვებსაიტი შეიყვანეთ!');
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://borjomi.loremipsum.ge/api/send-message');
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  const body = JSON.stringify({
    name,
    email,
    website,
    message,
  });

  xhr.onload = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.status === 1) {
          openModal('გამოვიდა გაგზავნა!');
        } else {
          openModal('არ გამოვიდა გაგზავნა! თავიდან ცადეთ.');
        }
      }
    }
  };

  xhr.send(body);
}
