export const Search = (url) => {
  const openEl = document.querySelector('.header .btn-search');
  const dialog = document.querySelector('.search');
  const input = dialog.querySelector('input[type="search"]');
  const serachButton = dialog.querySelector('.btn-search');
  const closeEl = dialog.querySelector('.btn-close');

  openEl.addEventListener('click', () => {
    dialog.show();
  });

  closeEl.addEventListener('click', () => {
    dialog.close();
  })

  serachButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (!input.value) {
      alert('검색어를 입력해주세요.');
      input.focus();
      return;
    }

    const isValue = input.value;

    location.href = `/${url}?serachKeyword=${isValue}`;
  });
}

