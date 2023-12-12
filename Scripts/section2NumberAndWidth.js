let htmlMastery = document.getElementById('htmlMastery'),
  cssMastery = document.getElementById('cssMastery'),
  jsMastery = document.getElementById('jsMastery'),
  pythonMastery = document.getElementById('pythonMastery'),
  isTrue = !1,
  maxNumber = 100;

function updateProgress(element, maximum) {
  let currentNumber = 0,
    step = 1,
    interval = setInterval(function () {
      currentNumber < maximum
        ? ((currentNumber += step),
          (element.textContent = '( ' + currentNumber + '% )'))
        : clearInterval(interval);
    }, 10);
}

function resetNumber() {
  htmlMastery.textContent =
    cssMastery.textContent =
    jsMastery.textContent =
    pythonMastery.textContent =
      '( 0% )';
}

window.addEventListener('scroll', function () {
  let scrollPosition = window.scrollY || window.pageYOffset;
  !isTrue && Math.abs(scrollPosition) > maxNumber
    ? ((isTrue = !0),
      updateProgress(htmlMastery, 100),
      updateProgress(cssMastery, 100),
      updateProgress(jsMastery, 80),
      updateProgress(pythonMastery, 80))
    : isTrue &&
      Math.abs(scrollPosition) <= maxNumber &&
      ((isTrue = !1), resetNumber());
});

let skillsSection = document.getElementById('skills'),
  skillDivs = skillsSection.querySelectorAll('.skills div'),
  skillIndex = 0,
  maxSkillWidth = 12,
  maxSkillWidthSecondary = 9.6,
  skillIncrement = 0.03;

function animateSkillLines() {
  let scrollPosition = window.scrollY || window.pageYOffset,
    primaryWidth = Math.min(
      maxSkillWidth,
      skillIndex + skillIncrement * Math.abs(scrollPosition)
    ),
    secondaryWidth = Math.min(
      maxSkillWidthSecondary,
      skillIndex + skillIncrement * Math.abs(scrollPosition)
    );
  skillDivs[0].style.width = skillDivs[1].style.width = primaryWidth + 'em';
  skillDivs[2].style.width = skillDivs[3].style.width = secondaryWidth + 'em';
  !isTrue &&
    Math.abs(scrollPosition) > maxNumber &&
    ((isTrue = !0),
    updateProgress(htmlMastery, 100),
    updateProgress(cssMastery, 100),
    updateProgress(jsMastery, 80),
    updateProgress(pythonMastery, 80));
}

window.addEventListener('scroll', animateSkillLines);

function openLink(link) {
  window.location.href = link;
}
