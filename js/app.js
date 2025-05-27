function headers(text) {
  
  text = text.replace(/^# (.*)$/gm, '<h1>$1</h1>');
  text = text.replace(/^## (.*)$/gm, '<h2>$1</h2>');
  text = text.replace(/^### (.*)$/gm, '<h3>$1</h3>');
  text = text.replace(/^#### (.*)$/gm, '<h4>$1</h4>');
  text = text.replace(/^##### (.*)$/gm, '<h5>$1</h5>');
  text = text.replace(/^###### (.*)$/gm, '<h6>$1</h6>');
  return text;
}

function convertBoldItalic(text) {

  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong><br>');
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em><br>');
  return text;
}

function transformMarkdown(text) {

  text = headers(text);
  text = convertBoldItalic(text);
  text = generarVinculo(text);
  return text;
}

function generarVinculo(text) {
  
  return text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
}

document.getElementById('markdownInput').addEventListener('input', function () {
  const markdown = this.value.trim();
  const preview = document.getElementById('markdownPreview');
  const html = transformMarkdown(markdown);
  preview.innerHTML = html;
});
