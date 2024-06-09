import os
import json

from categories.frontend.script import CSettings
from categories.backend.script import ESettings
from categories.fullstack.script import FSettings
from categories.computervision.script import TSettings
from categories.machinelearning.script import SSettings

#os.system('clear')
base_path = os.path.dirname(os.path.abspath(__file__))

files = ['data.json', '000001.jpg']
paths = [
    os.path.join(base_path, 'categories', 'frontend'),
    os.path.join(base_path, 'categories', 'backend'),
    os.path.join(base_path, 'categories', 'fullstack'),
    os.path.join(base_path, 'categories', 'computervision'),
    os.path.join(base_path, 'categories', 'machinelearning')
]

""" [Category Loop; Frontend] """
for category1 in paths[0:1]:
    cfg = CSettings.search_folders(category1, files)

    with open(os.path.join(category1, 'info.json'), "w", encoding='utf-8') as file:
        json.dump(cfg, file, ensure_ascii=False)
    print("[Barlow; 'info.json' file for frontend created].")


""" [Category Loop; Backend] """
for category2 in paths[1:2]:
    cfg = ESettings.search_folders(category2, files)

    with open(os.path.join(category2, 'info.json'), "w", encoding='utf-8') as file:
        json.dump(cfg, file, ensure_ascii=False)
    print("[Barlow; 'info.json' file for backend created].")


""" [Category Loop; Fullstack] """
for category3 in paths[2:3]:
    cfg = FSettings.search_folders(category3, files)

    with open(os.path.join(category3, 'info.json'), "w", encoding='utf-8') as file:
        json.dump(cfg, file, ensure_ascii=False)
    print("[Barlow; 'info.json' file for fullstack created].")


""" [Category Loop; Computer Vision] """
for category4 in paths[3:4]:
    cfg = TSettings.search_folders(category4, files)

    with open(os.path.join(category4, 'info.json'), "w", encoding='utf-8') as file:
        json.dump(cfg, file, ensure_ascii=False)
    print("[Barlow; 'info.json' file for computer vision created].")


""" [Category Loop; Machine Learning] """
for category5 in paths[4:5]:
    cfg = SSettings.search_folders(category5, files)

    with open(os.path.join(category5, 'info.json'), "w", encoding='utf-8') as file:
        json.dump(cfg, file, ensure_ascii=False)
    print("[Barlow; 'info.json' file for machine learning created].")
