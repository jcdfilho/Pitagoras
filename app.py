from flask import Flask, request
import math

app = Flask(__name__)

@app.route("/pitagoras")
def encontrarValor():
    hipotenusa = request.args.get('hipotenusa', 0, type=float)
    cateto_oposto = request.args.get('cateto_oposto', 0, type=float)
    cateto_adjacente = request.args.get('cateto_adjacente', type=float)
    if hipotenusa == 0:
        hipotenusa = round(math.sqrt(cateto_oposto**2 + cateto_adjacente**2),2)
        return {"Resultado":hipotenusa}
    if cateto_oposto == 0:
        cateto_oposto = round(math.sqrt(hipotenusa**2 - cateto_adjacente**2),2)
        return {"Resultado":cateto_oposto}
    if cateto_adjacente == 0:
        cateto_adjacente = round(math.sqrt(hipotenusa**2 - cateto_oposto**2),2)
        return {"Resultado":cateto_adjacente}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=50100, debug=True)