import speakersInfo from './speakersInfo.js';

document.querySelector('#speakers__container').innerHTML = speakersInfo.map(
  (info) => `
    <article class="speaker">
    <img src=${info.Image} alt="Speaker's face" class="speaker__img" />
    <div class="speaker__body">
      <h4 class="speaker__name">${info.name}</h4>
      <span class="speaker__summary">
        ${info.summary}
      </span>
      <span class="bar--primary"></span>
      <p class="speaker__details">
        ${info.details}
      </p>
    </div>
  </article> `,
)
  .join('');