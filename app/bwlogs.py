import os
import json
import random

#os.system('clear')
directorios = [
    './categories/frontend',
    './categories/backend',
    './categories/fullstack',
    './categories/machinelearning',
    './categories/computervision'
]

def obtener_carpetas(directorio):
    try:
        elementos = os.listdir(directorio)
        carpetas = [os.path.join(directorio, elemento).replace('.', '') for elemento in elementos if os.path.isdir(os.path.join(directorio, elemento)) and elemento != '__pycache__']
        return carpetas
    except OSError as e:
        print(f"[Barlow (ERROR); Error al acceder a la ruta {directorio}. {e}]")
        return []

diccionario_carpetas = {}
for i, directorio in enumerate(directorios, start=1):
    carpetas = obtener_carpetas(directorio)
    clave = f'cat{i}'
    carpetas_aleatorias = random.sample(carpetas, len(carpetas))
    diccionario_carpetas[clave] = carpetas_aleatorias


with open('./categories/logs.json', 'w', encoding='utf-8') as archivo:
    json.dump(diccionario_carpetas, archivo, ensure_ascii=False)
print("[Barlow; Fichero 'logs.json' creado correctamente].")
