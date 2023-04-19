---
title: 4. 파이썬에서 클래스 연습
author: 수채화
date: 2023-04-19 01:56:00 0000
categories: [Blogging, Study, Python]
tags: [python, class]
---
```python
# pygame 모듈 임포트
import pygame
import random

# 색상 정의
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)

# 화면 크기 설정
SCREEN_WIDTH = 1024
SCREEN_HEIGHT = 868

# 캐릭터 클래스 정의
class Character(pygame.sprite.Sprite):
    # 생성자
    def __init__(self, x, y, image):
        # 스프라이트 클래스의 생성자 호출
        super().__init__()
        # 이미지와 사각형 객체 설정
        self.image = pygame.image.load(image)
        self.rect = self.image.get_rect()
        self.rect.x = x
        self.rect.y = y
        # 속성 설정
        self.name = random.choice(["Alice", "Bob", "Charlie", "David", "Eve"])
        self.level = random.randint(5, 10)
        self.health = random.randint(5, 10)
        self.strength = random.randint(1, 5)
        self.agility = random.randint(1, 4)
        # 추가 속성 설정
        self.hp = self.level * self.health
        self.attack = self.level * self.strength
        self.defense = (self.level * self.agility) / 2
        # 공격 가능 여부 설정
        self.can_attack = True

    # 공격 메서드 정의
    def attacked(self, target):
        # 공격 가능한 경우
        if self.can_attack:
            # 주사위 굴리기
            dice = random.randint(1, 20)
            # 주사위가 20이면 치명타
            if dice == 20:
                damage = max(self.attack - target.defense, 0) * 2
                
                print(f"{self.name}이(가) {target.name}에게 치명타를 입혔습니다!")
            # 주사위가 1이면 실패
            elif dice == 1:
                damage = 0
                print(f"{self.name}이(가) {target.name}을(를) 공격했지만 실패했습니다!")
            # 그 외의 경우 일반 공격
            else:
                damage = max(self.attack - target.defense, 0)
                print(f"{self.name}이(가) {target.name}에게 {damage}의 피해를 입혔습니다!")
            # 대상의 체력 감소시키기
            target.hp -= damage
            # 대상의 체력이 음수면 0으로 만들기
            if target.hp < 0:
                target.hp = 0
                # 공격 불가능 상태로 만들기
                self.can_attack = False

# pygame 초기화하기
pygame.init()

# 화면 객체 생성하기
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

# 화면 타이틀 설정하기
pygame.display.set_caption("Turn-based Game")

# 스프라이트 그룹 생성하기
all_sprites = pygame.sprite.Group()

# 캐릭터 객체 생성하기
character1 = Character(100, 300, "player1.png")
character2 = Character(600, 300, "player2.png")

# 스프라이트 그룹에 캐릭터 추가하기
all_sprites.add(character1)
all_sprites.add(character2)

# 폰트 객체 생성하기
font = pygame.font.SysFont("Arial", 32)

# 게임 루프 실행하기 
running = True

while running:
    # 이벤트 처리하기
    for event in pygame.event.get():
        # 종료 이벤트가 발생하면
        if event.type == pygame.QUIT:
            # 게임 루프 종료하기
            running = False

    # 화면 배경색으로 채우기
    screen.fill(BLUE)

    # 스프라이트 그룹 업데이트하고 그리기
    all_sprites.update()
    all_sprites.draw(screen)

    # 캐릭터의 정보 표시하기
    text1 = font.render(f"{character1.name} (Lv.{character1.level})", True, WHITE)
    text2 = font.render(f"HP: {character1.hp}", True, WHITE)
    text3 = font.render(f"{character2.name} (Lv.{character2.level})", True, WHITE)
    text4 = font.render(f"HP: {character2.hp}", True, WHITE)
    screen.blit(text1, (100, 200))
    screen.blit(text2, (100, 250))
    screen.blit(text3, (600, 200))
    screen.blit(text4, (600, 250))

    # 캐릭터의 체력이 0이면 승패 표시하기
    if character1.hp == 0:
        text5 = font.render(f"{character2.name} wins!", True, GREEN)
        screen.blit(text5, (350, 100))
    elif character2.hp == 0:
        text5 = font.render(f"{character1.name} wins!", True, GREEN)
        screen.blit(text5, (350, 100))

    # 화면 업데이트하기
    pygame.display.flip()

    # 시간 지연하기
    pygame.time.delay(1000)

    # 캐릭터의 공격 가능 여부 변경하기
    character1.can_attack = not character1.can_attack
    character2.can_attack = not character2.can_attack

    # 캐릭터의 공격 순서 결정하기
    if character1.agility > character2.agility:
        order = [character1, character2]
    elif character1.agility < character2.agility:
        order = [character2, character1]
    else:
        order = random.sample([character1, character2], 2)

    # 캐릭터가 공격하기
    for character in order:
        if character1.can_attack and character2.can_attack:
            if character == character1:
                target = character2
            else:
                target = character1
            character.attacked(target)
        else:
            break            

# pygame 종료하기
pygame.quit()
 ```
