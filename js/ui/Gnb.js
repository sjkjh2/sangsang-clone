export const Gnb = () => {

  const config = {
    paddingBottom: 20,
    rem: 10,
  }

  const gnb = document.querySelector('.gnb');
  if (!gnb) return;

  const { paddingBottom, rem } = config;

  const depths =  Array.from(gnb.querySelectorAll('.depth'));
  const height = gnb.querySelector('.gnb .depth li').offsetHeight;
  const header = document.querySelector('.header');
  
  const lis = depths.map((item) => {
    return item.querySelectorAll('li').length;
  })

  const maxLength = Math.max(...lis);
  const heightREM = (maxLength * height + paddingBottom) / rem;
  header.style.setProperty("--height", `${heightREM}rem`);
}