import "./Button.css";

export const Button = (icon, text, link) => `
  <a href="${link}" class="my-btn" target="_blank" rel="noopener noreferrer">
    <img src="${icon}" alt="${text}" class="button-icon"/>
    <h4>${text}</h4>
  </a>
`;