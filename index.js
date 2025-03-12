function checkTemperature(event) {
  event.preventDefault();

  const isReady = document.querySelector('input[name="ready"]').checked;
  if (!isReady) {
    alert(i18next.t("selectUnitAlert"));
    return;
  }

  let selectedUnit = document.querySelector(
    'input[name="temperature"]:checked'
  );
  if (!selectedUnit) {
    alert(i18next.t("selectUnitAlert"));
    return;
  }

  let unit = selectedUnit.value;
  let valueUnit = parseFloat(document.getElementById("value").value);
  let resultElement = document.getElementById("result");

  if (unit === "C") {
    if (valueUnit >= 30)
      resultElement.innerHTML = `<span class="highlight">${i18next.t(
        "resultHot"
      )}</span>`;
    else if (valueUnit > 20)
      resultElement.innerHTML = `<span class="highlight">${i18next.t(
        "resultWarm"
      )}</span>`;
    else
      resultElement.innerHTML = `<span class="highlight">${i18next.t(
        "resultCold"
      )}</span>`;
  } else {
    if (valueUnit >= 86)
      resultElement.innerHTML = `<span class="highlight">${i18next.t(
        "resultHot"
      )}</span>`;
    else if (valueUnit > 68)
      resultElement.innerHTML = `<span class="highlight">${i18next.t(
        "resultWarm"
      )}</span>`;
    else
      resultElement.innerHTML = `<span class="highlight">${i18next.t(
        "resultCold"
      )}</span>`;
  }

  const output = `
    <h3>${i18next.t("submittedValues")}</h3>
    <p>${i18next.t("temperatureUnit")}: ${unit}</p>
    <p>${i18next.t("value")}: ${valueUnit}</p>
    <p>${i18next.t("readyYes")}</p>
  `;
  resultElement.innerHTML += output;
}
