import pygame
from constantes import ASSETS_PATH

class Personaje:
    def __init__(self):
        self.image = pygame.image.load(f'{ASSETS_PATH}/images/personaje.png')  # Cargar la imagen del personaje
        self.shape = self.image.get_rect()  # Obtener el rectángulo que define la posición del personaje
        self.vidas = 3  # Barra de energía (o vidas)
        self.lasers = []  # Inicializar la lista de láseres

    def mover(self, dx, dy):
        self.shape.x += dx
        self.shape.y += dy

    def disparar(self):
        laser = Laser(self.shape.centerx, self.shape.top)  # Crear un nuevo láser en la posición del personaje
        self.lasers.append(laser)  # Agregar el láser a la lista de láseres
