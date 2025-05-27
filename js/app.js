
function headers(text) {
  return text
   .replace(/^# (.*)$/gim, '<h1>$1</h1>')
   .replace(/^## (.*)$/gim, '<h2>$1</h2>')
   .replace(/^### (.*)$/gim, '<h3>$1</h3>')
   .replace(/^#### (.*)$/gim, '<h4>$1</h4>')
   .replace(/^##### (.*)$/gim, '<h5>$1</h5>')
   .replace(/^###### (.*)$/gim, '<h6>$1</h6>');
    //hasta el h6
    
   
}

function convertBoldItalic(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}



// Función principal SIN usar '...callbacks'
function transformMarkdown(text, callbacks) {
  try {
    let result = text;
    for (const cb of callbacks) {
      result = cb(result);
    }
    return result;
  } catch (err) {
    throw new Error('Error al procesar el Markdown.');
  }
}

// Evento en tiempo real
document.getElementById('markdownInput').addEventListener('input', function () {
  const markdown = this.value.trim();
  const preview = document.getElementById('markdownPreview');

  try {
    const html = transformMarkdown(markdown, [
      headers,
      convertBoldItalic
    ]);
    preview.innerHTML = html;
  } catch (err) {
    preview.innerHTML = `<p style="color: red;">${err.message}</p>`;
  }
});
