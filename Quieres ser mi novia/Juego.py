""" JUEGO PY """
import random
import sys
import time
import pygame
from pygame.locals import *
from collections import deque
 
SCREEN_WIDTH = 600
SCREEN_HEIGHT = 480
SIZE = 20
 
 
def print_text(screen, font, x, y, text, fcolor=(255, 255, 255)):
    imgText = font.render(text, True, fcolor)
    screen.blit(imgText, (x, y))
 
 
def main():
    pygame.init()
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    pygame.display.set_caption ('serpiente codiciosa')
 
         claro = (100, 100, 100) # color de serpiente
         oscuro = (200, 200, 200) # color de comida
 
         font1 = pygame.font.SysFont ('SimHei', 24) # fuente puntuada
         font2 = pygame.font.Font (Ninguno, 72) # GAME OVER font
         rojo = (200, 30, 30) # color de fuente del JUEGO OVER
    fwidth, fheight = font2.size('GAME OVER')
         ancho_línea = 1 # ancho de línea de cuadrícula
         negro = (0, 0, 0) # color de línea de cuadrícula
         bgcolor = (40, 40, 60) # color de fondo
 
         # Dirección, comenzando a la derecha
    pos_x = 1
    pos_y = 0
         # Si la serpiente se mueve hacia la derecha, haga clic rápidamente hacia abajo a la izquierda, ya que la actualización del programa no es tan rápida, el evento hacia abajo estará cubierto por la izquierda, haciendo que la serpiente se retire, directamente GAME OVER
         # b variables se utilizan para evitar que esto suceda
    b = True
         # Alcance
    scope_x = (0, SCREEN_WIDTH // SIZE - 1)
    scope_y = (2, SCREEN_HEIGHT // SIZE - 1)
         # Serpiente
    snake = deque()
         # Comida
    food_x = 0
    food_y = 0
 
         # Inicializa la serpiente
    def _init_snake():
        nonlocal snake
        snake.clear()
        snake.append((2, scope_y[0]))
        snake.append((1, scope_y[0]))
        snake.append((0, scope_y[0]))
 
         # Comida
    def _create_food():
        nonlocal food_x, food_y
        food_x = random.randint(scope_x[0], scope_x[1])
        food_y = random.randint(scope_y[0], scope_y[1])
        while (food_x, food_y) in snake:
                         # Para evitar que salga comida de la serpiente
            food_x = random.randint(scope_x[0], scope_x[1])
            food_y = random.randint(scope_y[0], scope_y[1])
 
    _init_snake()
    _create_food()
 
    game_over = True
         start = False # Ya sea para comenzar, cuando start = True, game_over = True, solo muestra GAME OVER
         puntaje = 0 # puntaje
         orispeed = 0.5 # velocidad original
    speed = orispeed
    last_move_time = None
         pausa = falso # pausa
 
    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                sys.exit()
            elif event.type == KEYDOWN:
                if event.key == K_RETURN:
                    if game_over:
                        start = True
                        game_over = False
                        b = True
                        _init_snake()
                        _create_food()
                        pos_x = 1
                        pos_y = 0
                                                 # Puntuación 
                        score = 0
                        last_move_time = time.time()
                elif event.key == K_SPACE:
                    if not game_over:
                        pause = not pause
                elif event.key in (K_w, K_UP):
                                         # Este juicio es para evitar que la serpiente se mueva hacia arriba y presione la tecla hacia abajo, lo que conduce a GAME OVER directo
                    if b and not pos_y:
                        pos_x = 0
                        pos_y = -1
                        b = False
                elif event.key in (K_s, K_DOWN):
                    if b and not pos_y:
                        pos_x = 0
                        pos_y = 1
                        b = False
                elif event.key in (K_a, K_LEFT):
                    if b and not pos_x:
                        pos_x = -1
                        pos_y = 0
                        b = False
                elif event.key in (K_d, K_RIGHT):
                    if b and not pos_x:
                        pos_x = 1
                        pos_y = 0
                        b = False
 
                 # Color de fondo de relleno
        screen.fill(bgcolor)
                 # Dibujar líneas de cuadrícula Líneas verticales
        for x in range(SIZE, SCREEN_WIDTH, SIZE):
            pygame.draw.line(screen, black, (x, scope_y[0] * SIZE), (x, SCREEN_HEIGHT), line_width)
                 # Dibujar líneas de cuadrícula líneas horizontales
        for y in range(scope_y[0] * SIZE, SCREEN_HEIGHT, SIZE):
            pygame.draw.line(screen, black, (0, y), (SCREEN_WIDTH, y), line_width)
 
        if game_over:
            if start:
                print_text(screen, font2, (SCREEN_WIDTH - fwidth)//2, (SCREEN_HEIGHT - fheight)//2, 'GAME OVER', red)
        else:
            curTime = time.time()
            if curTime - last_move_time > speed:
                if not pause:
                    b = True
                    last_move_time = curTime
                    next_s = (snake[0][0] + pos_x, snake[0][1] + pos_y)
                    if next_s[0] == food_x and next_s[1] == food_y:
                                                 # Comer alimentos
                        _create_food()
                        snake.appendleft(next_s)
                        score += 10
                        speed = orispeed - 0.03 * (score // 100)
                    else:
                        if scope_x[0] <= next_s[0] <= scope_x[1] and scope_y[0] <= next_s[1] <= scope_y[1] \
                                and next_s not in snake:
                            snake.appendleft(next_s)
                            snake.pop()
                        else:
                            game_over = True
 
                 # Dibujar comida
        if not game_over:
                         # Evite GAME OVER cuando cubra GAME OVER
            pygame.draw.rect(screen, light, (food_x * SIZE, food_y * SIZE, SIZE, SIZE), 0)
 
                 # Dibuja una serpiente
        for s in snake:
            pygame.draw.rect(screen, dark, (s[0] * SIZE + line_width, s[1] * SIZE + line_width,
                                            SIZE - line_width * 2, SIZE - line_width * 2), 0)
 
                 print_text (screen, font1, 30, 7, f'speed: {score // 100} ')
                 print_text (screen, font1, 450, 7, f'score: {score} ')
 
        pygame.display.update()
 
 
if __name__ == '__main__':
    main()
