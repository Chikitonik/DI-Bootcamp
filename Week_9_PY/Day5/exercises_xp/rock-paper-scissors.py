from game import Game


def get_user_menu_choice():
    print('1. Play a new game')
    print('2. Show scores')
    print('3. Quit')
    choice = ''
    while choice not in [1, 2, 3]:
        choice = int(input('Your chose: '))
    return choice


def print_results(results):
    print(results)


def main():
    choice = get_user_menu_choice()
    results = {'win': 0, 'loss': 0, 'draw': 0}
    while choice == 1:
        game = Game()
        game_result = game.play()
        results[game_result] += 1
        choice = get_user_menu_choice()
    if choice == 2:
        print_results(results)


main()
