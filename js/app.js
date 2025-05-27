function headers(text) {
  try {
    text = text.replace(/^# (.*)$/gm, '<h1>$1</h1>');
    text = text.replace(/^## (.*)$/gm, '<h2>$1</h2>');
    text = text.replace(/^### (.*)$/gm, '<h3>$1</h3>');
    text = text.replace(/^#### (.*)$/gm, '<h4>$1</h4>');
    text = text.replace(/^##### (.*)$/gm, '<h5>$1</h5>');
    text = text.replace(/^###### (.*)$/gm, '<h6>$1</h6>');
    return text;
  } catch (error) {
    console.error('Error en headers:', error);
    return text; // devuelve el texto sin cambios si hay error
  }
}

function convertBoldItalic(text) {
  try {
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return text;
  } catch (error) {
    console.error('Error en convertBoldItalic:', error);
    return text;
  }
}

function generarVinculo(text) {
  try {
    return text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
  } catch (error) {
    console.error('Error en generarVinculo:', error);
    return text;
  }
}

function transformMarkdown(text) {
  try {
    text = headers(text);
    text = convertBoldItalic(text);
    text = generarVinculo(text);
    return text;
  } catch (error) {
    console.error('Error en transformMarkdown:', error);
    return `<p style="color:red;">Error al procesar Markdown.</p>`;
  }
}

document.getElementById('markdownInput').addEventListener('input', function () {
  const markdown = this.value.trim();
  const preview = document.getElementById('markdownPreview');
  try {
    const html = transformMarkdown(markdown);
    preview.innerHTML = html;
  } catch (error) {
    console.error('Error en evento input:', error);
    preview.innerHTML = `<p style="color:red;">Error inesperado.</p>`;
  }
});
