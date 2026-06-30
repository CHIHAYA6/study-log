const contentInput = document.getElementById("studyContent");
const hoursInput = document.getElementById("studyHours");
const addBtn = document.getElementById("addBtn");
const recordList = document.getElementById("recordList");
const totalHoursElement = document.getElementById("totalHours");

let totalHours = 0;

addBtn.addEventListener
("click", () =>
  {
  const content = contentInput.value;
  const hours = Number(hoursInput.value);

  if (!content || !hours) {
    alert("学習内容と勉強時間を入力してください");
    return;
  }

  const li = document.createElement("li");

  li.textContent = `${content} - ${hours}時間`;

  recordList.appendChild(li);

  totalHours += hours;
  totalHoursElement.textContent = totalHours;

  contentInput.value = "";
  hoursInput.value = "";
  }
)
;