import pygame
import sys
from constantes import SCREEN_WIDTH, SCREEN_HEIGHT, ASSETS_PATH, START_IMAGE_PATH, IMPERIAL_MARCH_PATH

def mostrar_pantalla_inicio(screen):
    # Cargar la imagen de inicio
    imagen_inicio = pygame.image.load(START_IMAGE_PATH)
    imagen_inicio = pygame.transform.scale(imagen_inicio, (SCREEN_WIDTH, SCREEN_HEIGHT))
    screen.blit(imagen_inicio, (0, 0))
    pygame.display.flip()

    # Reproducir audio
    pygame.mixer.music.load(IMPERIAL_MARCH_PATH)
    pygame.mixer.music.play()

    # Esperar a que termine el audio
    while pygame.mixer.music.get_busy():
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

    # Actualizar la pantalla
    screen.blit(imagen_inicio, (0, 0))
    pygame.display.flip()

def main():
    pygame.init()
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    pygame.display.set_caption("Amenaza Fantasma")

    # Cargar los recursos del juego
    icon = pygame.image.load(f'{ASSETS_PATH}/images/fond0001.jfif')
    pygame.display.set_icon(icon)

    # Cargar el fondo
    fondo = pygame.image.load(f'{ASSETS_PATH}/images/fondo.jpg')
    fondo = pygame.transform.scale(fondo, (SCREEN_WIDTH, SCREEN_HEIGHT))

    # Cargar una estrella u otro objeto adicional
    estrella = pygame.image.load(f'{ASSETS_PATH}/images/estrella.png')
    estrella = pygame.transform.scale(estrella, (SCREEN_WIDTH, SCREEN_HEIGHT))

    # Cargar sonido láser
    sonido_laser = pygame.mixer.Sound(f'{ASSETS_PATH}/audio/laser.mp3')

    # Posición del personaje
    personaje = (SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2)

    # Inicializar enemigos y nivel
    enemigos = []  # Lista para almacenar enemigos
    nivel = 1

    # Inicializar el reloj
    clock = pygame.time.Clock()

    # Inicializar el fondo actual con el fondo original
    fondo_actual = fondo

    # Bucle principal del juego
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

if __name__ == "__main__":
    main()
