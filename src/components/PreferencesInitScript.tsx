export function PreferencesInitScript() {
  const script = `(function () {
  try {
    var t = localStorage.getItem('altacod-theme');
    var l = localStorage.getItem('altacod-locale');
    var root = document.documentElement;
    if (t === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    }
    root.lang = l === 'en' ? 'en' : 'ru';
  } catch (e) {}
})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
