from flask import Flask, request, jsonify
from flask_cors import CORS
import whisper
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

# Configuración
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'wav', 'mp3', 'm4a', 'ogg', 'flac', 'webm'}
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 25 * 1024 * 1024  # 25MB máx

# Cargar modelo Whisper
print("Cargando modelo Whisper...")
model = whisper.load_model("small")
print("Modelo cargado correctamente")

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok', 'service': 'whisper-server'})

@app.route('/transcribe', methods=['POST'])
def transcribe():
    try:
        # Validar que hay file en la request
        if 'audio' not in request.files:
            return jsonify({'error': 'No audio file provided'}), 400
        
        file = request.files['audio']
        
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        
        if not allowed_file(file.filename):
            return jsonify({'error': 'File type not allowed'}), 400
        
        # Guardar archivo temporal
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Transcribir con Whisper
        print(f"Transcribiendo: {filename}")
        result = model.transcribe(filepath, language="es")
        text = result["text"]
        
        # Limpiar archivo
        os.remove(filepath)
        
        return jsonify({
            'text': text,
            'language': result.get('language', 'es'),
            'status': 'success'
        })
    
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/models', methods=['GET'])
def get_models():
    return jsonify({
        'available_models': ['tiny', 'base', 'small', 'medium', 'large'],
        'current_model': 'base'
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)