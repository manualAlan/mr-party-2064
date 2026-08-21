
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  menu?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open') ?? false;
    menu.setAttribute('aria-expanded', String(open));
  });

  const requestedEvent = new URLSearchParams(location.search).get('event');
  const eventSelect = document.querySelector('.register-form select');
  if (requestedEvent && eventSelect) eventSelect.value = requestedEvent;

  document.querySelectorAll('form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (form.classList.contains('register-form')) {
      form.innerHTML = '<div class="form-success"><span>YOU’RE ON THE LIST</span><h3>See you there.</h3><p>Your place has been reserved in this campaign preview.</p></div>';
    } else if (form.classList.contains('volunteer-form')) {
      form.innerHTML = '<div class="form-success compact-success"><span>WELCOME TO THE TEAM</span><h3>You’re in.</h3><p>Your local MR organiser would follow up from the live campaign system.</p></div>';
    } else {
      form.innerHTML = '<strong>SUBSCRIBED</strong><span>The next field bulletin would land in your inbox.</span>';
    }
  }));

  if (location.hash) requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({block:'start'}));
});
