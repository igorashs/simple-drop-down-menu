exports.ddmAddToggle = function ddmAddToggle(
  nodeEl,
  className,
  callBack = null
) {
  nodeEl.addEventListener('click', () => {
    nodeEl.classList.toggle(className);
    if (callBack) callBack();
  });
};
