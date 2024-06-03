// script.js
async function loadModel() {
    const tokenizer = await window.tf.loadTokenizer('distilbert-base-uncased');
    const model = await window.tf.loadModel('https://huggingface.co/distilbert-base-uncased/resolve/main/tf_model.h5');
    return { tokenizer, model };
}

async function sendMessage() {
    const prompt = document.getElementById('prompt').value;
    const responseDiv = document.getElementById('response');
    
    const { tokenizer, model } = await loadModel();
    const inputs = tokenizer.encode(prompt, return_tensors="pt");
    const outputs = model.generate(inputs, max_length=150, num_return_sequences=1);
    const response = tokenizer.decode(outputs[0], skip_special_tokens=True);

    responseDiv.innerHTML = `<p>${response}</p>`;
}
