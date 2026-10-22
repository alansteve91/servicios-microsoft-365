// ============================================================
//  CONFIGURACIÓN: edita aquí los formularios (título, texto, link)
// ============================================================
const FORMULARIOS = [
  {
    etiqueta: "ACCESO",
    titulo: "MFA Temporal",
    descripcion: "Solicita un acceso temporal a tu cuenta mientras se resuelve tu método de autenticación.",
    url: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=79nzElcHxUGfqCRhDZ9rzmImBXJGEpJHiHjChakUqjBURTNaTDNMVTdHUVdLM0s2WEdZSjIzWlgxSC4u",
    icono: "clock",
  },
  {
    etiqueta: "SEGURIDAD",
    titulo: "Restablecimiento MFA",
    descripcion: "Para cuando cambiaste de celular, perdiste el dispositivo o ya no recibes los códigos de verificación.",
    url: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=79nzElcHxUGfqCRhDZ9rzmImBXJGEpJHiHjChakUqjBURTJDVVo2NlFBUEI3Q0oyQlNXTDhBOFJFQi4u",
    icono: "shield",
  },
  {
    etiqueta: "CUENTA",
    titulo: "Restablecimiento de Contraseña 365",
    descripcion: "Si olvidaste tu contraseña de Microsoft 365.",
    url: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=79nzElcHxUGfqCRhDZ9rzmImBXJGEpJHiHjChakUqjBURjNVSjdaNExBT0E3UzdMOFZMUk1ZSkNJSi4u",
    icono: "key",
  },
];

// ============================================================
const ICONOS = {
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M15 8l2 2"/>',
  arrow: '<path d="M7 17L17 7M9 7h8v8"/>',
};

const svg = (nombre) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONOS[nombre]}</svg>`;

document.getElementById("cards").innerHTML = FORMULARIOS.map(
  (f) => `
  <a class="card" href="${f.url}" target="_blank" rel="noopener noreferrer">
    <div class="card-head">
      <div class="icon">${svg(f.icono)}</div>
      <span class="tag">${f.etiqueta}</span>
    </div>
    <h3>${f.titulo}</h3>
    <p>${f.descripcion}</p>
    <span class="cta">Abrir formulario ${svg("arrow")}</span>
  </a>`
).join("");

document.getElementById("year").textContent = new Date().getFullYear();
