// Ochrana e-mailu proti robotům (spam):
// Adresa NENÍ v HTML - v atributech jsou jen oddělené části (data-user, data-domain)
// a celý e-mail (včetně znaku "@") vznikne teprve po KLIKNUTÍ uživatele.
// Do prvního kliknutí není adresa v DOM, takže ji nezískají ani roboti,
// kteří sice spouštějí JavaScript, ale na odkaz neklikají.
// Není to stoprocentní ochrana, ale zastaví drtivou většinu sběračů e-mailů.
(function () {
  document.querySelectorAll("a.contact[data-user]").forEach(function (el) {
    el.addEventListener("click", function reveal(e) {
      e.preventDefault();
      var email = el.getAttribute("data-user") + "@" + el.getAttribute("data-domain");
      el.textContent = email;
      el.setAttribute("href", "mailto:" + email);
      el.removeAttribute("data-user");
      el.removeAttribute("data-domain");
      el.removeEventListener("click", reveal);
    });
  });
})();
