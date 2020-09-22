const createHeader = (value) => {
  const newHeader = document.createElement("h1");
  newHeader.innerHTML = value;
  return newHeader;
};

module.exports = { createHeader };
