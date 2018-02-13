// window  load
window.addEventListener('load', () => {
  const input = document.querySelector('.input');
  //input change value
  //Get the var value
  /*
  const style = getComputedStyle(document.documentElement);
  const colorValue  =  style.getPropertyValue('--main-bg');
  */
  input.addEventListener('change', _ => {
    //set the var value
    document.documentElement.style.setProperty('--main-bg',_.target.value);
  });
} );
