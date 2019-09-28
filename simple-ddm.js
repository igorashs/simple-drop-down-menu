const addToggle = function addToggle(
  nodeTrigger,
  nodeList,
  className,
  callBack = null
) {
  if (!nodeTrigger) {
    throw new Error('Parameter nodeTrigger is not defined');
  }

  if (!nodeList) {
    throw new Error('Parameter nodeList is not defined');
  }

  nodeTrigger.addEventListener('click', () => {
    nodeList.classList.toggle(className);
    if (callBack) callBack();
  });
};

const addFor = function addFor(
  triggerClass,
  nodeListClass,
  className,
  callBack = null
) {
  const trigger = document.querySelector(triggerClass);
  const nodeList = document.querySelector(nodeListClass);

  if (!trigger) {
    throw new Error(`No Trigger Found with class ${triggerClass} `);
  }

  if (!nodeList) {
    throw new Error(`No nodeList Found with class ${nodeListClass} `);
  }

  addToggle(trigger, nodeList, className, callBack);
};

const addForEach = function addForEach(
  triggersClass,
  nodesListClass,
  className,
  callBack = null
) {
  const triggers = [...document.querySelectorAll(triggersClass)];
  const nodesList = [...document.querySelectorAll(nodesListClass)];

  if (!triggers) {
    throw new Error('No triggers Found');
  }

  if (!nodesList) {
    throw new Error('No nodeList Found');
  }

  if (triggers.length !== nodesList.length) {
    throw new Error('Triggers and nodesList do Not have The same length');
  }

  triggers.forEach((trigger) => {
    addToggle(trigger, nodesList.shift(), className, callBack);
  });
};

exports.addToggle = addToggle;
exports.addForEach = addForEach;
exports.addFor = addFor;
