const bgColors = ['#fff', '#fff', '#fff']
const gropElems = document.querySelectorAll('.grop')
const partnerElems = document.querySelectorAll('.partner');

const setColorOfSection = () => {
  gropElems.forEach((gropElems, idx) => {
    gropElem.style.backgroundColors[idx]
  })
}

// IntersectionObserver 등록하기
const i = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('active')
    } else {
      entry.target.classList.remove('active')
    }
  })
})

partnerElems.forEach((el) => {
  i.observe(el);
})