exports.addToggle = function addToggle(
  nodeTrigger,
  nodeList,
  className,
  callBack = null
) {
  nodeTrigger.addEventListener('click', () => {
    nodeList.classList.toggle(className);
    if (callBack) callBack();
  });
};
