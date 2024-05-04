document.getElementsByTagName("nav")[0].innerHTML = `
<a href="/" title="На главную">
    <img src="assets/mqlogo.svg" height="100%">
</a>
<a href="#top" title="Вернуться к началу">
    <img src="assets/vector-to-top.svg" height="100%">
</a>
`;
document.getElementsByTagName("footer")[0].innerHTML = `
<div>
<h2>
<a href="https://vk.com/mq_minecraft">VK</a>
</h2>
<h2>
Fonts: Caviar Dreams.<br>© MaxQuasars Team ${new Date().getFullYear()}
</h2>
`;
document.getElementsByTagName("body")[0].innerHTML = `
<div id="top"></div>
` + document.getElementsByTagName("body")[0].innerHTML;