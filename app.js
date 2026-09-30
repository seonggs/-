// 첨부 JSON의 22건 데이터를 내장했습니다.
// 따라서 배포 서버뿐 아니라 index.html을 더블클릭하는 로컬 실행에서도 동일하게 작동합니다.
const services = [
  {
    "서비스ID": "S001",
    "서비스명": "주민등록등본 발급",
    "소관기관": "주민센터",
    "민원분야": "주민등록",
    "온라인처리": "가능",
    "처리기한일": 7,
    "수수료": 500
  },
  {
    "서비스ID": "S002",
    "서비스명": "전입신고",
    "소관기관": "복지정책과",
    "민원분야": "주민등록",
    "온라인처리": "불가",
    "처리기한일": 1,
    "수수료": 0
  },
  {
    "서비스ID": "S003",
    "서비스명": "인감증명 발급",
    "소관기관": "복지정책과",
    "민원분야": "주민등록",
    "온라인처리": "가능",
    "처리기한일": 1,
    "수수료": 0
  },
  {
    "서비스ID": "S004",
    "서비스명": "주민등록증 재발급",
    "소관기관": "건축과",
    "민원분야": "주민등록",
    "온라인처리": "가능",
    "처리기한일": 0,
    "수수료": 0
  },
  {
    "서비스ID": "S005",
    "서비스명": "건축물대장 발급",
    "소관기관": "구청 민원봉사과",
    "민원분야": "건축",
    "온라인처리": "불가",
    "처리기한일": 0,
    "수수료": 1000
  },
  {
    "서비스ID": "S006",
    "서비스명": "건축허가 신청",
    "소관기관": "건축과",
    "민원분야": "건축",
    "온라인처리": "불가",
    "처리기한일": 1,
    "수수료": 2000
  },
  {
    "서비스ID": "S007",
    "서비스명": "용도변경 신고",
    "소관기관": "시청 민원과",
    "민원분야": "건축",
    "온라인처리": "불가",
    "처리기한일": 0,
    "수수료": 0
  },
  {
    "서비스ID": "S008",
    "서비스명": "지방세 납부확인서",
    "소관기관": "건축과",
    "민원분야": "세무",
    "온라인처리": "가능",
    "처리기한일": 1,
    "수수료": 1000
  },
  {
    "서비스ID": "S009",
    "서비스명": "취득세 신고",
    "소관기관": "교통행정과",
    "민원분야": "세무",
    "온라인처리": "가능",
    "처리기한일": 0,
    "수수료": 0
  },
  {
    "서비스ID": "S010",
    "서비스명": "재산세 조회",
    "소관기관": "교통행정과",
    "민원분야": "세무",
    "온라인처리": "가능",
    "처리기한일": 3,
    "수수료": 0
  },
  {
    "서비스ID": "S011",
    "서비스명": "기초연금 신청",
    "소관기관": "건축과",
    "민원분야": "복지",
    "온라인처리": "가능",
    "처리기한일": 7,
    "수수료": 500
  },
  {
    "서비스ID": "S012",
    "서비스명": "복지급여 조회",
    "소관기관": "시청 민원과",
    "민원분야": "복지",
    "온라인처리": "가능",
    "처리기한일": 14,
    "수수료": 5000
  },
  {
    "서비스ID": "S013",
    "서비스명": "장애인 등록",
    "소관기관": "주민센터",
    "민원분야": "복지",
    "온라인처리": "가능",
    "처리기한일": 5,
    "수수료": 0
  },
  {
    "서비스ID": "S014",
    "서비스명": "자동차 등록",
    "소관기관": "주민센터",
    "민원분야": "교통",
    "온라인처리": "가능",
    "처리기한일": 1,
    "수수료": 5000
  },
  {
    "서비스ID": "S015",
    "서비스명": "운전면허 갱신",
    "소관기관": "교통행정과",
    "민원분야": "교통",
    "온라인처리": "불가",
    "처리기한일": 1,
    "수수료": 0
  },
  {
    "서비스ID": "S016",
    "서비스명": "주정차 위반 조회",
    "소관기관": "주민센터",
    "민원분야": "교통",
    "온라인처리": "가능",
    "처리기한일": 7,
    "수수료": 1000
  },
  {
    "서비스ID": "S017",
    "서비스명": "배출시설 신고",
    "소관기관": "주민센터",
    "민원분야": "환경",
    "온라인처리": "가능",
    "처리기한일": 1,
    "수수료": 0
  },
  {
    "서비스ID": "S018",
    "서비스명": "폐기물 처리 신청",
    "소관기관": "시청 민원과",
    "민원분야": "환경",
    "온라인처리": "가능",
    "처리기한일": 14,
    "수수료": 5000
  },
  {
    "서비스ID": "S019",
    "서비스명": "식품영업 신고",
    "소관기관": "건축과",
    "민원분야": "위생",
    "온라인처리": "가능",
    "처리기한일": 3,
    "수수료": 2000
  },
  {
    "서비스ID": "S020",
    "서비스명": "위생업소 조회",
    "소관기관": "시청 민원과",
    "민원분야": "위생",
    "온라인처리": "불가",
    "처리기한일": 7,
    "수수료": 500
  },
  {
    "서비스ID": "S021",
    "서비스명": "여권 발급 신청",
    "소관기관": "건축과",
    "민원분야": "여권",
    "온라인처리": "가능",
    "처리기한일": 7,
    "수수료": 1000
  },
  {
    "서비스ID": "S022",
    "서비스명": "여권 재발급",
    "소관기관": "교통행정과",
    "민원분야": "여권",
    "온라인처리": "가능",
    "처리기한일": 1,
    "수수료": 1000
  }
];

const keywordInput = document.getElementById("keyword");
const categorySelect = document.getElementById("category");
const resetBtn = document.getElementById("resetBtn");
const serviceBody = document.getElementById("serviceBody");
const cardList = document.getElementById("cardList");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatFee(value) {
  const fee = Number(value);
  return fee === 0 ? "무료" : fee.toLocaleString("ko-KR") + "원";
}

function formatDeadline(value) {
  const days = Number(value);
  return days === 0 ? "즉시" : days + "일";
}

function fillCategories() {
  const categories = [...new Set(services.map(item => item["민원분야"]))].sort((a, b) => a.localeCompare(b, "ko"));
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function getFilteredServices() {
  const keyword = keywordInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  return services.filter(item => {
    const matchesKeyword = item["서비스명"].toLowerCase().includes(keyword);
    const matchesCategory = !category || item["민원분야"] === category;
    return matchesKeyword && matchesCategory;
  });
}

function render() {
  const filtered = getFilteredServices();

  serviceBody.innerHTML = filtered.map(item => `
    <tr>
      <td><strong>${escapeHtml(item["서비스명"])}</strong></td>
      <td>${escapeHtml(item["소관기관"])}</td>
      <td>${escapeHtml(item["민원분야"])}</td>
      <td><span class="badge ${item["온라인처리"] === "가능" ? "" : "no"}">${escapeHtml(item["온라인처리"])}</span></td>
      <td>${formatDeadline(item["처리기한일"])}</td>
      <td>${formatFee(item["수수료"])}</td>
    </tr>
  `).join("");

  cardList.innerHTML = filtered.map(item => `
    <article class="service-card">
      <h3>${escapeHtml(item["서비스명"])}</h3>
      <dl>
        <dt>소관기관</dt><dd>${escapeHtml(item["소관기관"])}</dd>
        <dt>민원분야</dt><dd>${escapeHtml(item["민원분야"])}</dd>
        <dt>온라인처리</dt><dd>${escapeHtml(item["온라인처리"])}</dd>
        <dt>처리기한</dt><dd>${formatDeadline(item["처리기한일"])}</dd>
        <dt>수수료</dt><dd>${formatFee(item["수수료"])}</dd>
      </dl>
    </article>
  `).join("");

  resultCount.textContent = `총 ${services.length}건 중 ${filtered.length}건 표시`;
  emptyMessage.hidden = filtered.length !== 0;
}

keywordInput.addEventListener("input", render);
categorySelect.addEventListener("change", render);
resetBtn.addEventListener("click", () => {
  keywordInput.value = "";
  categorySelect.value = "";
  render();
  keywordInput.focus();
});

fillCategories();
render();
